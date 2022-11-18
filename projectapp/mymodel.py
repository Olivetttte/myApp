import datetime
from datetime import datetime
from sqlalchemy.orm import backref

from projectapp import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    harshed_password = db.Column(db.String(100), nullable=False)
    firstName = db.Column(db.String(100), nullable=False)
    lastName = db.Column(db.String(100), nullable=False)
    phoneNumber = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    lga = db.Column(db.String(100), nullable=False)
    def __repr__(self):
        return f"User('{self.email}')"
        

class Register(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    lastName = db.Column(db.String(100), nullable=False)
    phoneNumber = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    lga = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=backref('register', uselist=False))
    def __repr__(self):
        return f"Register('{self.firstName}')"

class Tasks(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    taskName = db.Column(db.String(100), nullable=False)
    taskDescription = db.Column(db.String(100), nullable=False)
    taskLocation = db.Column(db.String(100), nullable=False)
    taskStartDate = db.Column(db.String(100), nullable=False)
    taskEndDate = db.Column(db.String(100), nullable=False)
    taskCreatedOn = db.Column(db.String(100), nullable=False)
    taskPrice = db.Column(db.Integer, nullable=False)
    taskAssignedBy = db.Column(db.String(100), nullable=False)
    # user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    # user = db.relationship('User', backref=backref('tasks', uselist=False))
    def __repr__(self):
        return f"Tasks('{self.title}')"