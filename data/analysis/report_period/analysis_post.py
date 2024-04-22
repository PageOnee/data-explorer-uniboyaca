### Librerias Python
import os
import pandas as pd

### Clases
from ..core.load_data import LoadData
from ..core.methods import Methods
from ..core.paths import Paths
from ..core.items import Items

## Realiza el Analisis de Datos de los archivos de Posgrado
class AnalysisPost:
     
        
    ##  Valida el tipo de Analisis que se va a aplicar 
    def analysis_data_post(self, interval, lapse, category, item, item_data):
        
        if (interval == 'Semestral'):
            
            print('Analisis Semestral : ')
            data = self.analysis_data_semester(lapse, category, item, item_data)
        
        elif (interval == 'Anual'):
            
            print('Analisis Anual : ')
            data = self.analysis_data_year(lapse, category)
        
        elif (interval == 'General'):
            
            print('Analisis General : ')
            data = self.analysis_data_general(category)
        
        return data
    
    
    # Metodo : Reporte Semestral
    def analysis_data_semester(self, lapse, category, item, item_data):
        
        print(lapse)
        #  Path
        files_path = Paths.path_post()
        path = files_path.get(lapse)
        
        # Obtener el directorio actual del script y retroceder dos niveles
        directory = os.path.dirname(os.path.abspath(__file__))
        parent_directory = os.path.dirname(directory)
        
        # Construir la ruta al archivo
        file_path = os.path.join(parent_directory, path)
        
        # Carga los datos en el data frame
        load_df = LoadData()
        df = load_df.load_data_post(file_path)
        
        # Validacion si se ha de aplicar el filtrado
        if (item == ''):
            df = df
                        
        else:
            # Filtra los datos del data frame
            df = Methods.filter_data(df, item, item_data)
        
        if(category == ''):
            data_dic = Methods.count_data(df)

        if(category == 'Informacion Personal'):     
            
            data_dic = Methods.count_data(df, Items.informacion_personal_post)
        
        elif (category == 'Informacion Familiar'):
            
            data_dic = Methods.count_data(df, Items.informacion_familiar_post)
            
        elif (category == 'Estado SocioEconomico'):
            
            data_dic = Methods.count_data(df, Items.estado_socioeconomico_post)
            
        elif (category == 'Educacion Previa'):
            
            data_dic = Methods.count_data(df, Items.educacion_previa_post)
        elif (category == 'Contexto Social y Personal'):
            
            data_dic = Methods.count_data(df, Items.datos_etnicos_post)
        
        elif (category == 'Percepcion y Satisfaccion'):
            
            data_dic = Methods.count_data(df, Items.percepcion_post)
            
        return data_dic
    
    
    # Metodo : Reporte Anual
    def analysis_data_year(self, lapse, category):
        
        # Path de los archivos
        files_path = Paths.path_post()
        
        # Obtener el directorio actual y retroceder un nivel
        directory = os.path.dirname(os.path.abspath(__file__))
        parent_directory = os.path.dirname(directory)
        
        # Lista de archivos que coinciden con el lapso de tiempo
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
            df = load_df.load_data_post(full_path)
            dfs.append(df)
        
        concatenated_df = pd.concat(dfs, ignore_index=True)

        if(category == ''):
            data_dict = Methods.count_data(concatenated_df)

        if(category == 'Informacion Personal'):     
            
            print('Conteo Informacion Personal')
            data_dict = Methods.count_data(concatenated_df, Items.informacion_personal_post)

        elif (category == 'Percepcion y Satisfaccion'):
            
            print('Conteo Percepcion y Satisfaccion')
            data_dict = Methods.count_data(df, Items.percepcion_post)
            
        return data_dict
    
    
    # Metodo : Reporte general
    def analysis_data_general (self, category):
        
        # Path de los archivos
        files_path = Paths.path_post()
        
        # Obtener el directorio actual del script y retroceder un nivel
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
            df = load_df.load_data_post(file_path)
            dfs.append(df)

        concatenated_df = pd.concat(dfs, ignore_index=True)

        # Realizar el conteo utilizando el método count_data_year
        data_dict = Methods.count_data(concatenated_df)
        
        return data_dict
    