# contact/urls.py
from django.urls import path
from .views import ContactMessageCreateView

urlpatterns = [
    path('create/', ContactMessageCreateView.as_view(), name='contact-create'),
]
