The folder contains documentation of the contact page using django.

1. Configure Email
Follow the following to configure the email:
- Ensure you have an outlook account and for extra protection have the Authenticator app on your phone
- go to `https://account.microsoft.com/security?lang=en-US&refd=account.live.com`
- go to additional security and turn on two-step verification. Follow the steps to set it the two-step verification.
- go to "App passwords", click on "Create a new app password."
- copy paste it to the `EMAIL_HOST_PASSWORD` in the `settings.py`(myapp > settings.py)
- input your outlook account into the `DEFAULT_FROM_EMAIL` and `EMAIL_HOST_USER`

2. Configure the Views.py
Follow the following to configure your email in the views:
- go to the `views.py` (contact > views.py) and input the emails where necessary and ensure the passwords match with the ones in the `settings.py`

3. Run server
Follow the procedure below to run the server:
- `cd django-backend` and run `pipenv install` then enter the shell `pipenv shell`
- run `pip install -r requirements.txt` to install the dependencies
- run `python3 manage.py makemigrations` and `python3 manage.py migrate` to make necessary migrations
- run `python3 manage.py runserver` to run the server
- go to `http://127.0.0.1:8000/api/contact/create/` to view.
