from django.contrib import admin
from django.urls import path,include
from django.views.generic import TemplateView

### Todo : Configuracion de las rutas generales
urlpatterns = [
    path('data-explorer/admin/', admin.site.urls),
    path('data-explorer/', include('users.urls')),
    path('data-explorer/',include('data.urls')),
    
    path('', TemplateView.as_view(template_name="index.html"), name="index")
    
]
