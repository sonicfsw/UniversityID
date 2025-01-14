from flask import Flask, render_template, request, jsonify
from app.models import db

app = Flask(__name__)

# Конфигурация базы данных
app.config['SQLALCHEMY_DATABASE_URI'] = (
    'mssql+pyodbc://sonicfsw:123456789@192.168.0.107:1433/reservation+navigation'
    '?driver=ODBC+Driver+17+for+SQL+Server&TrustServerCertificate=yes'
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Инициализация базы данных
db.init_app(app)

# Главная страница
@app.route('/')
def home():
    return render_template('home.html')

# О проекте
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

# Все бронирования через вьюху
@app.route('/bookings')
def bookings():
    result = db.session.execute("SELECT * FROM BookingInfoView").fetchall()
    return render_template('bookings.html', bookings=[dict(row) for row in result])

# Форма бронирования
@app.route('/book', methods=['GET', 'POST'])
def book():
    if request.method == 'POST':
        data = request.form
        # Вызов хранимой процедуры для создания бронирования
        db.session.execute(
            "EXEC CreateReservation :User_ID, :ReservationGoal, :FreeTime_ID, :Auditorium_ID, :AuditoriumType_ID",
            {
                'User_ID': data['User_ID'],
                'ReservationGoal': data['ReservationGoal'],
                'FreeTime_ID': data['FreeTime_ID'],
                'Auditorium_ID': data['Auditorium_ID'],
                'AuditoriumType_ID': data['AuditoriumType_ID']
            }
        )
        db.session.commit()
        return jsonify({'message': 'Бронирование успешно создано'})
    return render_template('book.html')

# Карта IT-академии (интерактивное SVG)
@app.route('/it-academy')
def it_academy():
    return render_template('output.html')

if __name__ == '__main__':
    app.run(debug=True, port=8080)
