import re
import os
from bs4 import BeautifulSoup

def extract_svg_from_js(js_content):
    svg_pattern = re.compile(r'<svg.*?>.*?</svg>', re.DOTALL)
    match = svg_pattern.search(js_content)
    if match:
        return match.group(0)
    else:
        raise ValueError("SVG content not found in the provided JS file.")

def add_interactivity_to_svg(svg_content):
    soup = BeautifulSoup(svg_content, 'lxml-xml')

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
    """
    if soup.svg:
        soup.svg.insert(0, style)
    else:
        raise ValueError("No <svg> root element found.")

    for g in soup.find_all('g'):
        class_list = g.get('class', [])
        if isinstance(class_list, str):
            class_list = class_list.split()
        class_str = ' '.join(class_list)

        cls_match = re.match(r'cls-(\d+)', class_str)
        if cls_match:
            cls_id = cls_match.group(1)
            g['id'] = cls_id
            g['class'] = f'cls-{cls_id}'

            g['onmouseover'] = f"handleMouseOver('{cls_id}')"
            g['onmouseout'] = f"handleMouseOut('{cls_id}')"
            g['onclick'] = f"handleClick('{cls_id}')"

            for path in g.find_all('path'):
                path['class'] = 'cls-1'
            for text_tag in g.find_all('text'):
                text_tag['class'] = 'cls-2'

    script = soup.new_tag('script')
    script.string = """
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
      var form = document.getElementById('bookingForm');
      form.style.display = 'block';
      var input = document.getElementById('selectedArea');
      input.value = id;
    }
    """
    if soup.svg:
        soup.svg.insert_after(script)
    else:
        raise ValueError("No <svg> element found to attach script.")

    return str(soup)

def create_html_page(svg_content, output_file):
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Interactive SVG</title>
  <style>
    #bookingForm {{
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      padding: 20px;
      border: 1px solid #ccc;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }}
  </style>
</head>
<body>
  {svg_content}
  <div id="bookingForm">
    <h2>Booking Form</h2>
    <form>
      <input type="hidden" id="selectedArea" name="selectedArea">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name"><br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br><br>
      <input type="submit" value="Submit">
    </form>
  </div>
</body>
</html>
"""

    with open(output_file, 'w', encoding='utf-8') as file:
        file.write(html_content)

def main():
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
        output_html_file = os.path.join(output_directory, os.path.splitext(filename)[0] + '.html')

        try:
            with open(input_js_file, 'r', encoding='utf-8') as file:
                js_content = file.read()

            svg_content = extract_svg_from_js(js_content)
            interactive_svg_content = add_interactivity_to_svg(svg_content)
            create_html_page(interactive_svg_content, output_html_file)

            print(f"HTML создан: {output_html_file}")

        except FileNotFoundError:
            print(f"Файл {input_js_file} не найден.")
        except ValueError as e:
            print(f"Ошибка в файле {filename}: {e}")
        except Exception as e:
            print(f"Произошла ошибка с файлом {filename}: {e}")

if __name__ == "__main__":
    main()