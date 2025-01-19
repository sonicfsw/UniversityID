from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
import os

app = Flask(__name__)

# Конфигурация базы данных
app.config['SQLALCHEMY_DATABASE_URI'] = (
    'mssql+pyodbc://sa2:UID2425@192.168.0.101:1433/reservation+navigation'
    '?driver=ODBC+Driver+17+for+SQL+Server&TrustServerCertificate=yes'
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Инициализация базы данных
db = SQLAlchemy(app)

# Главная страница
@app.route('/')
def home():
    return render_template('home.html')

# О странице
@app.route('/about')
def about():
    return render_template('about.html')

# Контакты
@app.route('/contact')
def contact():
    return render_template('contact.html')

# Страница логина
@app.route('/login')
def login():
    return render_template('login.html')

# Все бронирования
@app.route('/bookings')
def bookings():
    try:
        # Выполняем запрос к вьюхе
        result = db.session.execute(text("SELECT * FROM BookingInfoView"))

        # Получаем метаданные (имена колонок)
        column_names = result.keys()
        rows = result.fetchall()

        # Преобразуем строки в список словарей
        bookings = [{column: value for column, value in zip(column_names, row)} for row in rows]

        # Передаем данные в шаблон
        return render_template('bookings.html', bookings=bookings)
    except Exception as e:
        print(f"Ошибка при загрузке данных: {e}")
        return render_template('error.html', message="Ошибка загрузки данных из вьюхи.")

# Форма бронирования
@app.route('/book')
def book():
    return render_template('book.html')

# IT-академия или карта
@app.route('/it-academy')
def it_academy():
    return render_template('output.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
