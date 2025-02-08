from werkzeug.security import generate_password_hash
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Конфигурация базы данных
app.config['SQLALCHEMY_DATABASE_URI'] = (
    'mssql+pyodbc://sonicfsw:123456789@192.168.0.105:1433/reservation+navigation'
    '?driver=ODBC+Driver+17+for+SQL+Server&TrustServerCertificate=yes'
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Инициализация базы данных
db = SQLAlchemy(app)


# Модель пользователя
class User(db.Model):
    __tablename__ = 'User'
    User_ID = db.Column(db.Integer, primary_key=True)
    First_name = db.Column(db.String(50), nullable=False)
    Last_name = db.Column(db.String(50), nullable=False)
    Contact_information = db.Column(db.String(100), unique=True, nullable=False)  # Почта
    Faculty = db.Column(db.String(50))
    GroupNumber = db.Column(db.String(50))
    Role_ID = db.Column(db.String(10), nullable=False)  # Роль пользователя
    email = db.Column(db.String(20), unique=True, nullable=False)  # Почта
    password_hash = db.Column(db.String(128), nullable=False)  # Хеш пароля

    def __repr__(self):
        return f'<User {self.email}>'


# Функция для добавления нового пользователя
def add_user(first_name, last_name, email, password, role):
    # Хешируем пароль
    password_hash = generate_password_hash(password)

    # Создаем нового пользователя
    new_user = User(
        First_name=first_name,
        Last_name=last_name,
        Contact_information=email,
        Faculty="Some Faculty",  # Замените на фактический факультет
        GroupNumber="1234",  # Замените на номер группы
        Role_ID=role,  # Устанавливаем роль
        email=email,
        password_hash=password_hash
    )

    # Добавляем пользователя в базу данных
    db.session.add(new_user)
    db.session.commit()

    print(f"User {email} added successfully!")


# Добавление нового студента
with app.app_context():
    add_user("John", "Doe", "john.doe@example.com", "student_password", "student")
