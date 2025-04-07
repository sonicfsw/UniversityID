import re
import os
from bs4 import BeautifulSoup

def extract_svgs_from_js(js_content):
    """
    Ищет во всём тексте ВСЕ <svg ...> ... </svg>.
    Возвращает список строк, каждая строка — это один блок <svg> ... </svg>.
    Если ничего не найдено, выбрасывает ValueError.
    """
    svg_pattern = re.compile(r'<svg.*?>.*?</svg>', re.DOTALL)
    matches = svg_pattern.findall(js_content)
    if not matches:
        raise ValueError("SVG content not found in the provided JS file.")
    return matches

def add_interactivity_to_svg(svg_content):
    """
    Добавляет стили, классы и обработчики событий внутрь тега <svg>.
    Возвращает готовый текст <svg>...</svg> со встроенным <script>.
    """
    soup = BeautifulSoup(svg_content, 'lxml-xml')
    svg_tag = soup.find('svg')
    if not svg_tag:
        raise ValueError("No <svg> root element found.")

    # Вставляем стили в начало <svg>
    style_tag = soup.new_tag('style')
    style_tag.string = """
    .highlighted {
      fill: yellow;
    }
    .cls-1 {
      fill: #C9C8C8;
      stroke: #000;
      stroke-miterlimit: 10;
    }
    .cls-2 {
      font-size: 24px;
      fill: #000;
      text-anchor: middle;
      font-weight: bold;
      dominant-baseline: middle;
    }
    """
    svg_tag.insert(0, style_tag)

    # Ищем все <g>, вешаем обработчики
    for g in soup.find_all('g'):
        class_list = g.get('class', [])
        if isinstance(class_list, str):
            class_list = class_list.split()
        class_str = ' '.join(class_list)

        # Пример: если класс "cls-1", то считаем, что это зона "1"
        cls_match = re.match(r'cls-(\d+)', class_str)
        if cls_match:
            cls_id = cls_match.group(1)
            g['id'] = cls_id
            g['class'] = f'cls-{cls_id}'

            # Ставим onmouseover / onmouseout / onclick
            g['onmouseover'] = f"handleMouseOver('{cls_id}')"
            g['onmouseout'] = f"handleMouseOut('{cls_id}')"
            g['onclick'] = f"handleClick('{cls_id}')"

            # Проставляем класс 'cls-1' на path и 'cls-2' на text,
            # чтобы использовать стили по умолчанию
            for path in g.find_all('path'):
                path['class'] = 'cls-1'
            for text_tag in g.find_all('text'):
                text_tag['class'] = 'cls-2'

    # Добавляем <script> внутри svg
    script_tag = soup.new_tag('script')
    script_tag.attrs['type'] = 'text/ecmascript'
    # Используем CDATA, чтобы парсер не ломался на символах < > в скрипте
    script_tag.string = """
    <![CDATA[
    function handleMouseOver(id) {
      var el = document.getElementById(id);
      if (el) {
        el.classList.add('highlighted');
      }
    }
    function handleMouseOut(id) {
      var el = document.getElementById(id);
      if (el) {
        el.classList.remove('highlighted');
      }
    }
    function handleClick(id) {
      alert("Clicked on area: " + id);
    }
    ]]>
    """
    svg_tag.append(script_tag)

    return str(soup)

def save_svg_file(svg_content, output_file):
    """
    Просто сохраняет строку svg_content в файл с расширением .svg
    """
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(svg_content)

def main():
    """
    Шаги:
    1. Спросить у пользователя путь к папке.
    2. Создать там подпапку JStoSVG (если нет).
    3. Найти все .js-файлы, извлечь из каждого все <svg> и сохранить как .svg
    """
    input_directory = input("Введите путь к папке с JavaScript файлами: ")
    if not os.path.isdir(input_directory):
        print("Ошибка: Указанный путь не является директорией.")
        return

    output_directory = os.path.join(input_directory, 'JStoSVG')
    os.makedirs(output_directory, exist_ok=True)

    js_files = [f for f in os.listdir(input_directory) if f.endswith('.js')]
    if not js_files:
        print("В указанной папке нет .js файлов.")
        return

    for filename in js_files:
        input_js_file = os.path.join(input_directory, filename)
        try:
            with open(input_js_file, 'r', encoding='utf-8') as file:
                js_content = file.read()

            svg_blocks = extract_svgs_from_js(js_content)

            for i, svg_block in enumerate(svg_blocks, start=1):
                interactive_svg_content = add_interactivity_to_svg(svg_block)

                output_svg_file = os.path.join(
                    output_directory,
                    f"{os.path.splitext(filename)[0]}_{i}.svg"
                )
                save_svg_file(interactive_svg_content, output_svg_file)
                print(f"SVG создан: {output_svg_file}")

        except FileNotFoundError:
            print(f"Файл {input_js_file} не найден.")
        except ValueError as e:
            # Например, если не нашлось ни одного <svg> или другие ошибки.
            print(f"Ошибка в файле {filename}: {e}")
        except Exception as e:
            print(f"Произошла ошибка с файлом {filename}: {e}")

if __name__ == "__main__":
    main()
