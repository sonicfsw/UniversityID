main
from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, SelectField
from wtforms.validators import DataRequired, Email
from flask_wtf.csrf import CSRFProtect
from werkzeug.security import check_password_hash, generate_password_hash
from flask_login import LoginManager, login_user, login_required, current_user, logout_user, UserMixin
#from sqlalchemy.sql import text
import os

app = Flask(__name__)

app.config['SECRET_KEY'] = 'your_secret_key_here'
csrf = CSRFProtect(app)

app.config['SQLALCHEMY_DATABASE_URI'] = (
    'mssql+pyodbc://sonicfsw:123456789@10.8.0.4:1433/reservation+navigation'
    '?driver=ODBC+Driver+17+for+SQL+Server&TrustServerCertificate=yes'
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#db = SQLAlchemy(app)

login_manager = LoginManager(app)
login_manager.login_view = 'login'

ADMIN_PASSWORD = os.getenv('ADMIN_PASSWORD', 'default_admin_password')

#class User(db.Model, UserMixin):
   # __tablename__ = 'User'
    #User_ID = db.Column(db.Integer, primary_key=True)
    #First_name = db.Column(db.String(50), nullable=False)
    #Last_name = db.Column(db.String(50), nullable=False)
    #Contact_information = db.Column(db.String(100), unique=True, nullable=False)
    #Faculty = db.Column(db.String(50), nullable=True)
    #GroupNumber = db.Column(db.String(50), nullable=True)
    #Role_ID = db.Column(db.String(10), nullable=False)
    #email = db.Column(db.String(255), unique=True, nullable=False)
    #password_hash = db.Column(db.String(128), nullable=False)

    #def get_id(self):
        #return str(self.User_ID)

    #def __repr__(self):
        #return f'<User {self.email}>'

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])

class RegisterForm(FlaskForm):
    first_name = StringField('First Name', validators=[DataRequired()])
    last_name = StringField('Last Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    role = SelectField('Role', choices=[('student', 'Student'), ('admin', 'Admin')], validators=[DataRequired()])
    faculty = StringField('Faculty')
    group_number = StringField('Group Number')

class AdminPasswordForm(FlaskForm):
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Sign In')

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/create_boking')
def boking_creation():
    return render_template('create_boking.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegisterForm()
    if form.validate_on_submit():
        if User.query.filter_by(email=form.email.data).first():
            flash('User with this email already exists.', 'danger')
            return render_template('register.html', form=form)

        password_hash = generate_password_hash(form.password.data)

        max_user_id = db.session.execute(text("SELECT MAX(User_ID) FROM [User]")).scalar() or 0
        next_user_id = max_user_id + 1

        new_user = User(
            User_ID=next_user_id,
            First_name=form.first_name.data,
            Last_name=form.last_name.data,
            Contact_information=form.email.data,
            Role_ID=form.role.data,
            email=form.email.data,
            password_hash=password_hash,
            Faculty=form.faculty.data if form.role.data == 'student' else None,
            GroupNumber=form.group_number.data if form.role.data == 'student' else None
        )

        db.session.add(new_user)
        db.session.commit()

        flash('Registration successful! You can now log in.', 'success')
        return redirect(url_for('login'))

    return render_template('register.html', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and check_password_hash(user.password_hash, form.password.data):
            login_user(user)
            next_page = request.args.get('next')
            return redirect(next_page or url_for('user_bookings'))
        flash('Invalid email or password', 'danger')

    return render_template('login.html', form=form)

@app.route('/bookings')
def bookings():
    try:
        result = db.session.execute(text("SELECT * FROM BookingInfoView"))
        column_names = result.keys()
        rows = result.fetchall()
        bookings = [{column: value for column, value in zip(column_names, row)} for row in rows]
        return render_template('bookings.html', bookings=bookings)
    except Exception as e:
        print(f"Ошибка при загрузке данных: {e}")
        return render_template('error.html', message="Ошибка загрузки данных из вьюхи.")

@app.route('/user_bookings')
@login_required
def user_bookings():
    try:
        result = db.session.execute(
            text("SELECT * FROM BookingInfoView WHERE User_ID = :user_id"),
            {'user_id': current_user.User_ID}
        )
        column_names = result.keys()
        rows = result.fetchall()
        bookings = [{column: value for column, value in zip(column_names, row)} for row in rows]

        if not bookings:
            flash('No bookings found for your account.', 'info')

        return render_template('user_bookings.html', bookings=bookings)
    except Exception as e:
        flash(f'Error loading bookings: {e}', 'danger')
        return render_template('error.html', message="Ошибка загрузки данных.")

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('home'))

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/book', methods=['GET', 'POST'])
def book():
    if request.method == 'POST':
        building = request.form.get('building')
        floor = request.form.get('floor')
        room = request.form.get('room')
        user_id = current_user.User_ID if current_user.is_authenticated else None
        insert_sql = text("""
            INSERT INTO Booking (User_ID, Building, Floor, Room)
            VALUES (:user_id, :building, :floor, :room)
        """)
        db.session.execute(
            insert_sql,
            {
                'user_id': user_id,
                'building': building,
                'floor': floor,
                'room': room
            }
        )
        db.session.commit()
        return redirect(url_for('user_bookings'))
    return render_template('book.html')

@app.route('/it-academy')
def it_academy():
    return render_template('output.html')

if __name__ == '__main__':
    #with app.app_context():
       # db.create_all()
    app.run(debug=True, port=5000)
=======
from flask import render_template, redirect, url_for, flash, request
from flask_login import login_user, login_required, logout_user, current_user
from sqlalchemy.sql import text
from werkzeug.security import generate_password_hash, check_password_hash

from app import db
from app.models import User
from app.forms import RegisterForm, LoginForm

def register_routes(app):

    @app.route('/')
    def home():
        return render_template('home.html')

    @app.route('/register', methods=['GET', 'POST'])
    def register():
        form = RegisterForm()
        if form.validate_on_submit():
            if User.query.filter_by(email=form.email.data).first():
                flash('User with this email already exists.', 'danger')
                return render_template('register.html', form=form)

            new_user = User(
                First_name=form.first_name.data,
                Last_name=form.last_name.data,
                Contact_information=form.email.data,
                Role_ID=form.role.data,
                email=form.email.data,
                password_hash=generate_password_hash(form.password.data),
                Faculty=form.faculty.data if form.role.data == 'student' else None,
                GroupNumber=form.group_number.data if form.role.data == 'student' else None
            )

            db.session.add(new_user)
            db.session.commit()

            flash('Registration successful!', 'success')
            return redirect(url_for('login'))

        return render_template('register.html', form=form)

    @app.route('/login', methods=['GET', 'POST'])
    def login():
        form = LoginForm()
        if form.validate_on_submit():
            user = User.query.filter_by(email=form.email.data).first()
            if user and check_password_hash(user.password_hash, form.password.data):
                login_user(user)
                return redirect(url_for('user_bookings'))
            flash('Invalid email or password', 'danger')

        return render_template('login.html', form=form)

    @app.route('/logout')
    @login_required
    def logout():
        logout_user()
        return redirect(url_for('home'))

    @app.route('/user_bookings')
    @login_required
    def user_bookings():
        try:
            result = db.session.execute(
                text("SELECT * FROM BookingInfoView WHERE User_ID = :user_id"),
                {'user_id': current_user.User_ID}
            )
            bookings = [dict(row) for row in result]
            return render_template('user_bookings.html', bookings=bookings)

        except Exception as e:
            flash(f'Error loading bookings: {e}', 'danger')
            return render_template('error.html', message="Ошибка загрузки данных.")
   dev
