from rest_framework.views import APIView
from rest_framework.response import Response 
from .analysis.analysis import Analysis
from rest_framework import status


### Todo : Vista para las operaciones de 'Data'
class DataView(APIView):
    
    ## ? Funcion : Realiza el llamado de la clase que aloja el Analisis de Datos
    def get(self, request, level=None, interval=None, lapse=None, category=None):
        
        try:    
            data = Analysis().analysis_data(level, interval, lapse, category)
        
        except Exception as e:    
            return Response({'error': f'Error al procesar los datos : {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)
        
        return Response(data, status=status.HTTP_200_OK)
