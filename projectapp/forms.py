from flask_wtf import FlaskForm
from wtforms import StringField,SubmitField
from wtforms.fields.simple import TextAreaField
from wtforms.validators import DataRequired,Email,Length
from flask_wtf.file import FileField, FileAllowed

