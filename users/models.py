from django.db import models


### Todo : Clase Usuario - BD 
class Users(models.Model):
    
    # ** Datos - (BD)
    name = models.CharField(max_length=255)
    user_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    
    # ** Configuro vista del Administrador para el Usuario
    def __str__(self):
        return self.email