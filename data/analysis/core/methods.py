### Librerias de python
import pandas as pd


## Metodos utilizados para realizar el Analisis de datos
class Methods:
    
    
    # Metodo : Conteo por periodo
        
    @staticmethod
    def count_data(df, columns=None):
        data_dict = {}
        
        # Validacion no se especifica categoria
        if columns is None:
            columns = df.columns
        
        # Columnas a excluir
        exclude_columns = ['LugarDeNacimiento', 'CiudadNacimiento', 'LugarResidencia', 'CiudadResidencia']
        
        for column in columns:
            # Validacion columna no existente en el df
            try:
                # Excluir las columnas especificadas
                if column in exclude_columns:
                    continue
                
                if isinstance(df[column][0], str) and ',' in df[column][0]:
                    # Separar las palabras y contar las ocurrencias individuales
                    word_counts = df[column].str.split(',\s*').explode().value_counts().to_dict()
                    data_dict[column] = word_counts
                else:
                    df_data = df[column].value_counts().to_dict()
                    data_dict[column] = df_data
            
            except KeyError:
                pass
            
        return data_dict


    # Metodo Filtrar el data frame a los datos especificados    
    def filter_data(df, item, item_data):
        try:
            print(item, item_data)
            # Filtrar el DataFrame por el valor específico en la columna indicada
            filtered_df = df[df[item] == item_data]
            return filtered_df
        except KeyError:
            # En caso de que la columna especificada no exista en el DataFrame
            print("La columna especificada no existe en el DataFrame.")
            return None
    
    
    # Metodo : Promedio de un item
    @staticmethod
    def average_data(df, column):
        
        # Verificar si el item existe en el dataFrame
        if column not in df.columns:
            raise ValueError(f"La columna '{column}' no existe en el DataFrame.")
        
        # Calcular el promedio de la item
        average = df[column].mean()
        
        return average
    
    
    # Metodo : Moda de un item
    @staticmethod
    def mode_data(df, column):
        
        # Verificar si el item existe en el dataFrame
        if column not in df.columns:
            raise ValueError(f"La columna '{column}' no existe en el DataFrame.")
        
        # Calcular la moda del item
        mode = df[column].mode()
        
        return mode[0] if not mode.empty else None
    
    # Manual 
    # Metodo : Conteo historico ----- porcentajes de los valores de las graficas/ colorew lineas historicos
    @staticmethod
    def count_data_historic(df, columns_to_count):
        results = {}
        for column_name in columns_to_count:
            if column_name in df.columns:
                column_data = df[column_name]
                value_counts = column_data.value_counts().to_dict()
                results[column_name] = value_counts
            else:
                print(f"Column '{column_name}' not found in DataFrame.")
        return results