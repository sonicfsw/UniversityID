from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'User'
    User_ID = db.Column(db.Integer, primary_key=True)
    First_name = db.Column(db.String(50), nullable=False)
    Last_name = db.Column(db.String(50), nullable=False)
    Contact_information = db.Column(db.String(100), nullable=True)
    Faculty = db.Column(db.String(50), nullable=False)
    GroupNumber = db.Column(db.String(50), nullable=True)  # Только для студентов
    Role_ID = db.Column(db.String(10), db.ForeignKey('UserRoles.Role_ID'), nullable=False)
    email = db.Column(db.String(256), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

class UserRoles(db.Model):
    __tablename__ = 'UserRoles'
    Role_ID = db.Column(db.String(10), primary_key=True)
    RoleName = db.Column(db.String(50), nullable=False)
