# contact/views.py
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from .models import ContactMessage
from .serializer import ContactMessageSerializer

class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # Send email to Outlook
        send_mail(
            'New Contact Form Submission',
            f'Name: {serializer.validated_data["name"]}\nEmail: {serializer.validated_data["email"]}\nMessage: {serializer.validated_data["message"]}',
            'test@outlook.com',  # Sender email address (your Outlook)
             ['eoatieno@outlook.com'],  # Recipient email address
            fail_silently=False,
            auth_user='test@outlook.com', #Sender email address (your Outlook)
            auth_password='nooatzrioalrtwip',  #The app password you generated
        )

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
