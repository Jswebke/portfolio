from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.exceptions import MethodNotAllowed
from .models import Contact
from .serializer import *
# Create your views here.
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    def get(self, request, *args, **kwargs):
        # Raise a MethodNotAllowed exception for GET requests
        raise MethodNotAllowed('GET')