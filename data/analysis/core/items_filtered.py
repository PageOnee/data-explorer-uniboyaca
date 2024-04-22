### Librerias de python
import pandas as pd
import os

### Clases
from .paths import Paths
from .load_data import LoadData
from .methods import Methods

## Clase : Items - Opciones de filtro
class ItemsFiltered:
    
    # Metodo : Cargar las opciones de filtrado
    def item_filtered(item):
        
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
        
        data_dict = Methods.items_filter(concatenated_df, item)

        return data_dict