### Librerias de Python
import os
import pandas as pd

### Clases
from ..core.load_data import LoadData
from ..core.methods import Methods
from ..core.paths import Paths
from ..core.items import Items


## Realiza el Analisis de Datos de los archivos de Pregrado
class AnalysisUnder:
    
         
    ## Metodo : Validacion del intervalo (General - Anual - Semestral) 
    def analysis_data_under(self, interval, lapse, category, item, item_data):
         
        if (interval == 'Semestral'):
            
            print('Analisis Semestral : ')
            data = self.analysis_data_semester(lapse, category, item, item_data)
        
        elif (interval == 'Anual'):
            
            print('Analisis Anual : ')
            data = self.analysis_data_year(lapse, category, item, item_data)
        
        elif (interval == 'General'):
            
            print('Analisis General : ')
            data = self.analysis_data_general(category, item, item_data)
        
        return data
    
    
    # Metodo : Reporte Semestral
    def analysis_data_semester(self, lapse, category, item, item_data):
          
        #  Path
        files_path = Paths.path_under()
        path = files_path.get(lapse)
        
        # Carpeta del directorio
        directory = os.path.dirname(os.path.abspath(__file__))
        parent_directory = os.path.dirname(directory)
        
        # Ruta al archivo
        file_path = os.path.join(parent_directory, path)
        
        # Carga los datos en el data frame
        load_df = LoadData()
        df = load_df.load_data_under(file_path)
        
        # Validacion si se ha aplicado un filtro
        if (item == ''):
            
            df=df
            
        else:
            
            # Filtra los el data frame
            df = Methods.filter_data(df, item, item_data)
            print('Filtrado el DataFrame')
            
        # Validacion de la categoria de los datos
        if(category == ''):
            
            data_dic = Methods.count_data(df)
            
        elif(category == 'Informacion Personal'):     
          
            data_dic = Methods.count_data(df, Items.informacion_personal)
        
        elif (category == 'Percepcion y Satisfaccion'):
            
            data_dic = Methods.count_data(df, Items.percepcion)
            
        elif (category == 'Educacion Previa'):
            
            data_dic = Methods.count_data(df, Items.educacion_previa)
        
        return data_dic
    
    
    # ** Metodo : Reporte Anual
    def analysis_data_year(self, lapse, category, item, item_data):
        
        # Path de los archivos
        files_path = Paths.path_under()
        
        # Directorio del script
        # Obtener el directorio actual del script y retroceder dos niveles
        directory = os.path.dirname(os.path.abspath(__file__))
        parent_directory = os.path.dirname(directory)
        
        # Lista de archivos que coinciden con el año proporcionado en lapse
        matching_files = [filename for year, filename in files_path.items() if str(lapse) in year]

        # Verificar si hay archivos correspondientes al año proporcionado
        if not matching_files:
            print(f"No se encontraron archivos para el año {lapse}.")
            return None

        #  Cargar y concatenar los DataFrames de los archivos correspondientes al año
        dfs = []
        
        for file_path in matching_files:
            
            full_path = os.path.join(parent_directory, file_path)
            load_df = LoadData()
            df = load_df.load_data_under(full_path)
            dfs.append(df)
        
        concatenated_df = pd.concat(dfs, ignore_index=True)

        # Validacion de la categoria de los datos
        if(category == ''):
            
            data_dic = Methods.count_data(concatenated_df)
            
        elif(category == 'Informacion Personal'):     
          
            data_dic = Methods.count_data(concatenated_df, Items.informacion_personal)
        
        elif (category == 'Percepcion y Satisfaccion'):
            
            data_dic = Methods.count_data(concatenated_df, Items.percepcion)
            
        elif (category == 'Educacion Previa'):
            
            data_dic = Methods.count_data(concatenated_df, Items.educacion_previa)
        
        return data_dic
    
    
    # Metodo : Reporte General
    def analysis_data_general (self, category, item, item_data):
        
        # Path de los archivos
        files_path = Paths.path_under()
        
        # Obtener el directorio actual del script
        directory = os.path.dirname(os.path.abspath(__file__))
        parent_directory = os.path.dirname(directory)

        # Obtener la lista de todos los archivos especificados en el diccionario
        all_files = [os.path.join(parent_directory, file_path) for file_path in files_path.values()]

        # Verificar si hay archivos disponibles
        if not all_files:
            print("No se encontraron archivos para el análisis.")
            return None

        # Cargar y concatenar los DataFrames de todos los archivos
        dfs = []
        
        for file_path in all_files:
            
            load_df = LoadData()
            df = load_df.load_data_under(file_path)
            dfs.append(df)

        concatenated_df = pd.concat(dfs, ignore_index=True)
  
        # Validacion de la categoria de los datos
            
        data_dict = Methods.count_data(concatenated_df)
            
        return data_dict
    