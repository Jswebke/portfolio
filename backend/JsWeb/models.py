from django.db import models

# Create your models here.
class Contact(models.Model):
    
    Customer_id = models.AutoField(primary_key=True)
    CompanyName = models.CharField( max_length=50)
    FullName = models.CharField(max_length=50)
    PhoneNumber = models.IntegerField()
    Email = models.EmailField(max_length=254)
    def __str__(self):
        return self.CompanyName
