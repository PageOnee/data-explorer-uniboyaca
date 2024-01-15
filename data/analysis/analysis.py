from .analysis_post import AnalysisPost
from .analysis_under import AnalysisUnder


### Todo : Realiza la automatización del analisis de datos 
class Analysis:
    
    ## ? Funcion : Router del Analisis de Datos 
    def analysis_data(self, level, interval, lapse, category):
        
        if(level == 'pregrado'):
            
            data = AnalysisUnder().analysis_data_under(interval, lapse, category)
            
        elif(level == 'posgrado'):
            
            data = AnalysisPost().analysis_data_post(interval, lapse, category)
            
        return data