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
