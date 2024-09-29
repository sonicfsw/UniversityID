import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient
import schedule
import time

# Подключение к MongoDB
try:
    client = MongoClient('mongodb://localhost:27017/', serverSelectionTimeoutMS=5000)
    client.server_info()
    db = client['timetable']
except Exception as e:
    print(f"Не удалось подключиться к MongoDB: {e}")
    exit()

# Парсинг сайта
def fetch_schedule(faculty, group, week_id):
    url = f'https://timetable.tusur.ru/faculties/{faculty}/groups/{group}?week_id={week_id}'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    schedule_data = []

    # Получение заголовков с датами
    date_elements = soup.find('thead').find_all('th')[1:]  # Пропускаем первый пустой элемент

    # Инициализация структуры данных для хранения расписания по датам
    date_schedules = {date_element.text.strip(): [] for date_element in date_elements}

    # Поиск данных
    for day_section in soup.find_all('tr', class_=lambda x: x and x.startswith('lesson_')):
        time_element = day_section.find('th', class_='time')
        lesson_time = time_element.text.strip() if time_element else None

        lessons = day_section.find_all('td', class_='lesson_cell')
        for index, lesson in enumerate(lessons):
            if len(date_schedules[date_elements[index].text.strip()]) >= 7:
                continue  # Пропускаем добавление урока, если уже есть 7 уроков для этой даты

            date_element = date_elements[index]
            subject_element = lesson.find('abbr', class_='js-tooltip')
            kind_element = lesson.find('span', class_='kind')
            auditorium_element = lesson.find('a', href=lambda x: x and 'buildings' in x)
            teacher_element = lesson.find('a', href=lambda x: x and 'teachers' in x)

            lesson_data = {
                'time': lesson_time,
                'subject': subject_element['title'].strip() if subject_element else None,
                'kind': kind_element.text.strip() if kind_element else None,
                'auditorium': auditorium_element.text.strip() if auditorium_element else None,
                'teacher': teacher_element.text.strip() if teacher_element else None
            }

            date_schedules[date_element.text.strip()].append(lesson_data)

    for date, lessons in date_schedules.items():
        if lessons:
            schedule_data.append({
                'date': date,
                'lessons': lessons
            })

    return schedule_data

# Функция для обновления данных в MongoDB
def update_schedule(faculty, group, weeks_to_fetch=5):
    for week_number in range(weeks_to_fetch):
        week_id = 720 + week_number  # Используем week_id из HTML кода сайта
        schedule_data = fetch_schedule(faculty, group, week_id)
        if schedule_data:
            collection = db[f'faculty_{faculty}_group_{group}_week_{week_number + 1}']
            collection.delete_many({})
            collection.insert_many(schedule_data)
            print(f"Расписание для факультета {faculty}, группы {group}, недели {week_number + 1} обновлено.")
        else:
            print(f"Расписание для факультета {faculty}, группы {group}, недели {week_number + 1} не найдено или пусто.")

# Список факультетов и групп
faculties_groups = [
    ('fb', '712-1'),
    ('fb', '712-2'),
    ('fb', '722-1'),
    # Добавить другие факультеты и группы позже!
]

def update_all_schedules():
    for faculty, group in faculties_groups:
        update_schedule(faculty, group)

# Обновляем расписание сразу после запуска программы
update_all_schedules()

# Запускаем периодическое обновление расписания каждые 15 минут
schedule.every(15).minutes.do(update_all_schedules)

while True:
    schedule.run_pending()
    time.sleep(1)
