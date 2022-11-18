from crypt import methods
import os,random
from flask import render_template,url_for,session,flash,redirect,request
from werkzeug.utils import redirect
#from werkzeug.wrappers import request

from projectapp import app,db
# from projectapp.mymodel import format_event, Event

# from projectapp.mymodel import Document, Gift, Guest,State
# from projectapp.forms import InvitationForm


# @app.route('/events', methods=['GET'])
# def getadmin_events():
#     events = Event.query.order_by(Event.id.asc()).all()
#     event_list= []
#     for event in events:
#         event_list.append(format_event(event))
#     return {'events': event_list}

# @app.route('/event/<id>', methods=['GET'])
# def getadonemin_event(id):
#     event = Event.query.filter_by(id=id).one()
#     formatted_event = format_event(event)
#     return {'event': formatted_event}

