# contact/views.py
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from .models import ContactMessage
from .serializer import ContactMessageSerializer
from django.core.mail import EmailMessage

class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # Send email to Outlook
        # send_mail(
        #     'New Contact Form Submission',
        #     f'Name: {serializer.validated_data["name"]}\nEmail: {serializer.validated_data["email"]}\nMessage: {serializer.validated_data["message"]}',
        #     'test@outlook.com',  # Sender email address (your Outlook)
        #      ['eoatieno@outlook.com'],  # Recipient email address
        #     fail_silently=False,
        #     auth_user='test@outlook.com', #Sender email address (your Outlook)
        #     auth_password='nooatzrioalrtwip',  #The app password you generated
        # )
        
        email_body = f"CompanyName: {serializer.validated_data['CompanyName']}\n FullName:{serializer.validated_data['FullName']}\n PhoneNumber:{serializer.validated_data['PhoneNumber']}\n Email: {serializer.validated_data['Email']}"
        email = EmailMessage(
            subject='New Contact Form Submission',
            body=email_body,
            from_email='jswebke@gmail.com',  # Sender email address (your Zoho)
            to=['jswebke@gmail.com'],  # Recipient email address
            reply_to=[serializer.validated_data['Email']],
            headers={'Content-Type': 'text/plain'},
        )
        email.send()

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
