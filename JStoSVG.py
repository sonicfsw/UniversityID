import re
import os
from bs4 import BeautifulSoup

def extract_svg_from_js(js_content):
    # Регулярное выражение для извлечения содержимого <svg>...</svg>
    svg_pattern = re.compile(r'<svg.*?>.*?</svg>', re.DOTALL)
    match = svg_pattern.search(js_content)
    if match:
        return match.group(0)
    else:
        raise ValueError("SVG content not found in the provided JS file.")

def add_interactivity_to_svg(svg_content):
    soup = BeautifulSoup(svg_content, 'lxml-xml')

    # Add styles
    style = soup.new_tag('style')
    style.string = """
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
    .st3 {
      fill: #000;
    }
    .st4 {
      font-size: 20px;
      font-weight: bold;
      fill: #000;
      text-anchor: middle;
      dominant-baseline: middle;
    }
    .st5 {
      text-anchor: middle;
      font-weight: bold;
      fill: #000;
      dominant-baseline: middle;
    }
    .st7 {
      fill: #000;
    }
    .cls-bg {
      fill: #C9C8C8;
    }
    .black-bg {
      fill: #000;
    }
    .white-text {
      fill: #fff;
      font-weight: bold;
      text-anchor: middle;
      dominant-baseline: middle;
    }
    """
    soup.svg.insert(0, style)

    # Modify and structure elements with class 'cls-***'
    for g in soup.find_all('g', id=True):
        cls_match = re.match(r'cls-(\d+)', ' '.join(g.get('class', [])))
        if cls_match:
            cls_id = cls_match.group(1)
            g['class'] = f'cls-{cls_id}'
            g['onmouseover'] = f"handleMouseOver('{cls_id}')"
            g['onmouseout'] = f"handleMouseOut('{cls_id}')"
            g['onclick'] = f"handleClick('{cls_id}')"

            for path in g.find_all('path'):
                path['class'] = 'cls-1'
            for text in g.find_all('text'):
                text['class'] = 'cls-2'

    # Add interactivity script
    script = soup.new_tag('script')
    script.string = """
    function handleMouseOver(id) {
      document.getElementById(id).classList.add('highlighted');
    }

    function handleMouseOut(id) {
      document.getElementById(id).classList.remove('highlighted');
    }

    function handleClick(id) {
      console.log(id);
    }
    """
    soup.svg.insert_after(script)

    return str(soup)

def create_html_page(svg_content, output_file):
    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Interactive SVG</title>
    </head>
    <body>
      {svg_content}
    </body>
    </html>
    """

    with open(output_file, 'w', encoding='utf-8') as file:
        file.write(html_content)

if __name__ == "__main__":
    input_directory = input("Введите путь к папке с JavaScript файлами: ")

    if not os.path.isdir(input_directory):
        print("Ошибка: Указанный путь не является директорией.")
    else:
        output_directory = os.path.join(input_directory, 'JStoSVG')
        os.makedirs(output_directory, exist_ok=True)

        for filename in os.listdir(input_directory):
            if filename.endswith('.js'):
                input_js_file = os.path.join(input_directory, filename)
                output_html_file = os.path.join(output_directory, os.path.splitext(filename)[0] + '.html')

                try:
                    with open(input_js_file, 'r', encoding='utf-8') as file:
                        js_content = file.read()

                    svg_content = extract_svg_from_js(js_content)
                    interactive_svg_content = add_interactivity_to_svg(svg_content)
                    create_html_page(interactive_svg_content, output_html_file)

                    print(f"Интерактивная HTML-страница создана: {output_html_file}")
                except FileNotFoundError:
                    print(f"Файл {input_js_file} не найден.")
                except ValueError as e:
                    print(f"Ошибка: {e}")
                except Exception as e:
                    print(f"Произошла ошибка: {e}")
