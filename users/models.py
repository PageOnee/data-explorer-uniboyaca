from django.db import models

# Todo : Clase Usuario Bd 
class Users(models.Model):
    
    userName = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    
    # ** Configuro vista del Administrador para el Usuario
    def __str__(self):
        return self.email