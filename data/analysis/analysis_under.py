import os
from .load_data import LoadData
from .methods import Methods


### Todo : Realiza el Analisis de Datos de los archivos de Pregrado
class AnalysisUnder:
    
    ## ? Funcion : Carga las rutas de los archivos del Banco de Datos
    def __init__(self):
    
        # * Paths rutas Pregrado
        self.files_paths_under = {
            '2022-2': 'resources/under/2022-2.xlsx',
        }
        self.informacion_personal = ['Sede', 'ProgramaAcademico', 'DoblePrograma', 'SedeDoblePrograma','ProgramaDoblePrograma','Sexo','ConviveCon','CantidadPersonasCargoEconomicamente']


    ## ? Funcion : Valida el tipo de Analisis que se va a aplicar 
    def analysis_data_under(self, interval, lapse, category):
        
        if (interval == 'semester'):
            data = self.analysis_data_semester(lapse, category)
        
        elif (interval == 'year'):
            data = self.analysis_data_year(lapse, category)
        
        elif (interval == 'general'):
            data = self.analysis_data_general(category)
        
        return data
    
    
    ## ? Funcion : Analisis de Datos - Conteo Semestral
    def analysis_data_semester(self, lapse, category):
        
        # * Path
        directory = os.path.dirname(os.path.abspath(__file__))       
        file_path = os.path.join(directory, self.files_paths_under[lapse])
        
        # * Carga los datos
        load_df = LoadData()
        df = load_df.load_data_under(file_path)
        
        # * Realiza el Conteo
        data_dic = Methods.count_data(df, self.informacion_personal)
        #print('Diccionario : ', data_dic)
        
        return data_dic
    
    
    ## ? Funcion : Analisis de Datos - Conteo Anual
    def analysis_data_year(self, lapse, category):
        
         # * Path
        directory = os.path.dirname(os.path.abspath(__file__))       
        file_path = os.path.join(directory, self.files_paths_under[lapse])
        
        # * Carga los datos
        load_df = LoadData()
        df = load_df.load_data_under(file_path)
        
        # * Realiza el Conteo
        data_dic = Methods.count_data(df, self.informacion_personal)
        #print('Diccionario : ', data_dic)
        
        return data_dic
    
    
    ## ? Funcion : Analisis de Datos - Conteo General
    def analysis_data_general(self, category):
        
         # * Path
        directory = os.path.dirname(os.path.abspath(__file__))       
        file_path = os.path.join(directory, self.files_paths_under[lapse])
        
        # * Carga los datos
        load_df = LoadData()
        df = load_df.load_data_under(file_path)
        
        # * Realiza el Conteo
        data_dic = Methods.count_data(df, self.informacion_personal)
        #print('Diccionario : ', data_dic)
        
        return data_dic
    