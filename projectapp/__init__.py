#This file will import all the things we need in this package so that it #will be assessible to any module in the package, any module can import as #from thispackage import xx '''

from flask import Flask
from flask_wtf import CSRFProtect
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail,Message
from flask_migrate import Migrate
#from flask_wtf.csrf import CSRFProtect
# from flask_cors import CORS
from flask_jwt_extended import create_access_token,jwt_required,get_jwt_identity, JWTManager


app=Flask(__name__,instance_relative_config=True, static_folder="../build", static_url_path="/")

csrf = CSRFProtect()  #or use this method csrf.init_app(app)

#load the package's config here after the app has been created

from projectapp import config #config within package folder
app.config['JWT_SECRET_KEY'] = 'My-secret key'  
app.config.from_object(config.LiveConfig)
app.config.from_pyfile('config.py') #loads config from instance folder

#mail = Mail(app).....i commented it out
# CORS(app)
jwt = JWTManager(app)
db = SQLAlchemy(app)
migrate= Migrate(app,db)

#Routes are now separated, load routes each from the respective folder
from projectapp.myroutes import admin, user

from projectapp import forms
from projectapp import mymodel
