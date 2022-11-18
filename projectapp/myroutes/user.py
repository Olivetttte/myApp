from crypt import methods
from datetime import datetime
import email
from operator import sub
import random,os,string,json,requests
from flask_mail import Message
from flask import render_template,url_for,session,request,jsonify,redirect,flash
from flask_jwt_extended import create_access_token,jwt_required,get_jwt_identity
from werkzeug.utils import redirect
from werkzeug.security import generate_password_hash, check_password_hash


from projectapp import app,db
from projectapp.mymodel import User, Register, Tasks


@app.route('/')
def hello():
    return app.send_static_file('index.html')

@app.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != email or password != password:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


@app.route("/hello", methods=["GET"])
def get_hello():
    dictionary = {
        "hello": "world"
        }   
    return jsonify(dictionary)



@app.route('/login',methods=['POST'])
def login():
    email=request.json.get('email',None)
    password=request.json.get('password',None)
    if email: 
        user=User.query.filter_by(email=email).first()
        if user:
            if user.password==password:
                session['email']=email
                return ("user logged in")
            else:
                return ("invalid pass")
        else:
            return ("user does not exist")
    else:
        return ("invalid info")

@app.route('/logout')
def logout():
    session.pop('email',None)
    return redirect(url_for('login'))

# create a route to register new users and redirect them to login
@app.route('/register',methods=['POST'])
def register():
    email = request.json.get('email')
    password = request.json.get('password')
    harshed_password = generate_password_hash(password)
    # confirmPassword = request.json.get('confirmPassword')
    firstName = request.json.get('firstName')
    lastName = request.json.get('lastName')
    phoneNumber = request.json.get('phoneNumber')
    address = request.json.get('address')
    city = request.json.get('city')
    state = request.json.get('state')
    lga = request.json.get('lga')
    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"msg": "User already exists"}) 
    else:
        new_user = User(email=email, harshed_password=harshed_password, firstName=firstName, lastName=lastName, phoneNumber=phoneNumber, address=address, city=city, state=state, lga=lga)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg": "User created successfully"}) 
   
        

    
@app.route('/dashboard')
def dashboard():
    if 'email' not in session:
        return redirect(url_for('login'))
    user = User.query.filter_by(email=session['email']).first()
    return render_template('dashboard.html',name=user.email)


@app.route('/profile')
def profile():
    if 'email' not in session:
        return redirect(url_for('login'))
    user = User.query.filter_by(email=session['email']).first()
    return render_template('profile.html',name=user.email)

@app.route('/user')
def user():
    if 'email' not in session:
        return redirect(url_for('login'))
    user = User.query.filter_by(email=session['email']).first()
    return render_template('user.html',name=user.email)

@app.route('/user/<id>')
def user_id(id):
    if 'email' not in session:
        return redirect(url_for('login'))
    user = User.query.filter_by(email=session['email']).first()
    return render_template('user.html',name=user.email)


@app.route('/user/<id>/delete')
def user_id_delete(id):
    if 'email' not in session:
        return redirect(url_for('login'))
    user = User.query.filter_by(email=session['email']).first()
    return render_template('user.html',name=user.email)

@app.route('/user/<id>/update')
def user_id_update(id):
    if 'email' not in session:
        return redirect(url_for('login'))
    user = User.query.filter_by(email=session['email']).first()
    return render_template('user.html',name=user.email)



@app.route('/requests', methods=['POST'])
def tasks():
    taskName= request.json.get('taskName')
    taskDescription= request.json.get('taskDescription')
    taskLocation= request.json.get('taskLocation')
    taskStartDate= request.json.get('taskStartDate')
    taskEndDate= request.json.get('taskEndDate')
    taskCreatedOn= request.json.get('taskCreatedOn')
    taskPrice= request.json.get('taskPrice')
    taskAssignedBy= request.json.get('taskAssignedBy')
    newTask=Tasks(taskName=taskName,taskAssignedBy=taskAssignedBy,taskDescription=taskDescription,taskLocation=taskLocation,taskStartDate=taskStartDate,taskEndDate=taskEndDate,taskCreatedOn=taskCreatedOn,taskPrice=taskPrice )
    db.session.add(newTask)
    db.session.commit()
    return jsonify({"msg": "Task created successfully"})

#fetch all requests in database 
@app.route('/fecthtasks', methods=['GET'])
def fetch_tasks():
    tasks=Tasks.query.all()
    results = [
        {
            "taskName": task.taskName,
            "taskDescription": task.taskDescription,
            "taskLocation": task.taskLocation,
            "taskStartDate": task.taskStartDate,
            "taskEndDate": task.taskEndDate,
            "taskCreatedOn": task.taskCreatedOn,
            "taskPrice": task.taskPrice,
            "taskAssignedBy": task.taskAssignedBy
        } for task in tasks]

    return jsonify({"tasks": results})

@app.route('/fecthtaskhistory', methods=['GET'])
def fetch_task_history():
    tasks=Tasks.query.all()
    results = [
        {
            "id": task.id,
            "taskName": task.taskName,
            "taskLocation": task.taskLocation,
            "taskStartDate": task.taskStartDate,
            "taskEndDate": task.taskEndDate,
            "taskPrice": task.taskPrice,
            "taskAssignedBy": task.taskAssignedBy
        } for task in tasks]

    return jsonify({"tasks": results})


# get request for a single task
@app.route('/tasks/<id>', methods=['GET'])
def get_task(id):
    task = Tasks.query.get(id)
    return task_schema.jsonify(task)

# update a task
@app.route('/tasks/<id>', methods=['PUT'])
def update_task(id):
    task = Tasks.query.get(id)
    taskName= request.json.get('taskName')
    taskDescription= request.json.get('taskDescription')
    taskLocation= request.json.get('taskLocation')
    taskStartDate= request.json.get('taskStartDate')
    taskEndDate= request.json.get('taskEndDate')
    taskCreatedOn= request.json.get('taskCreatedOn')
    taskPrice= request.json.get('taskPrice')
    task.taskName=taskName
    task.taskDescription=taskDescription
    task.taskLocation=taskLocation
    task.taskStartDate=taskStartDate
    task.taskEndDate=taskEndDate
    task.taskCreatedOn=taskCreatedOn
    task.taskPrice=taskPrice
    db.session.commit()
    return task_schema.jsonify(task)

# delete a task
@app.route('/tasks/<id>', methods=['DELETE'])
def delete_task(id):
    task = Tasks.query.get(id)
    db.session.delete(task)
    db.session.commit()
    return task_schema.jsonify(task)
    