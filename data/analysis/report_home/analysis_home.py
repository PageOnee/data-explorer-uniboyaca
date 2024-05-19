### Librerias de Python
import os
import pandas as pd

### Clases
from ..core.load_data import LoadData
from ..core.methods import Methods
from ..core.paths import Paths
from ..core.items import Items

class Analysis_Home:
    
    ##  Valida el tipo de Analisis que se va a aplicar 
    def getInfoDash(self):
        
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
        data = {}

        for file_path in all_files:
            
            load_df = LoadData()
            df = load_df.load_data_under(file_path)
            dfs.append(df)

        concatenated_df = pd.concat(dfs, ignore_index=True)
        # Contar el número total de registros en el DataFrame concatenado
        total_records = len(concatenated_df)
        
        # Guardar el número total de registros en el diccionario data
        data['Numero de registros'] = total_records
        
        # Encontrar el programa académico más estudiado
        most_studied_program = concatenated_df['ProgramaAcademico'].mode()[0]
        data['Programa Academico'] = most_studied_program
        
        # Encontrar el estrato socioeconómico más repetido
        most_common_stratum = concatenated_df['EstratoSocioEconomico'].mode()[0]
        data['Estrato Socioeconomico'] = most_common_stratum
        
        # Encontrar el nivel de satisfacción general más frecuente
        most_common_satisfaction = concatenated_df['PercepcionImagenGeneral'].mode()[0]
        data['Satisfaccion General'] = most_common_satisfaction
        
        print("Numero de resgistros",data)
        return data