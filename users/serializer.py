from rest_framework import serializers
from .models import Users


### Todo : Claser serializadora -> Json
class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Users
        fields = '__all__'