from rest_framework.views import APIView
from rest_framework.response import Response 
from .analysis.analysis import Analysis
from rest_framework import status


## Todo : Vista para la operaciones de 'Data'
class DataView(APIView):
    
    def get(self, request):
        
        data = Analysis().analysis_data()
        return Response(data, status=status.HTTP_200_OK)
