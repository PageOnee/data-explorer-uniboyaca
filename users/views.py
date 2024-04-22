from rest_framework import viewsets
from .serializer import UserSerializer
from .models import Users


### Todo : Configura la vista para operaciones CRUD en Users.
class UserView (viewsets.ModelViewSet):
    
    serializer_class = UserSerializer
    queryset = Users.objects.all()