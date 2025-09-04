from django.shortcuts import render, redirect
from django.template import loader
from django.http  import HttpResponse
from django.contrib import messages
import requests

# Create your views here.

PORTFOLIO_API_KEY = 'AIzaSyBBRB9XEAEyiIKR_OBtABwq1gVX-iJnjg8'

def home(request):
    response = requests.get('https://randomuser.me/api')
    context = {'data': response}
    template = loader.get_template('index.html')
    return HttpResponse(template.render(request = request, context = context))