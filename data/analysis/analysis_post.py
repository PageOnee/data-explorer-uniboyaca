import os


### Todo : Realiza el Analisis de Datos de los archivos de Pregrado
class AnalysisPost:
     
    ## ? Funcion : Carga las rutas de los archivos del Banco de Datos
    def __init__(self):
    
        # * Paths rutas Posgrado
        self.files_paths_post  = {
            '2020-2': 'resources/post/2020-2.xlsx',
            '2021-1': 'resources/post/2021-1.xlsx',
        }
    
    
    ## ? Funcion : Valida el tipo de Analisis que se va a aplicar 
    def analysis_data_post(self):
        
        return 2023