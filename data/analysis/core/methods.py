### Librerias de python
import pandas as pd


## Metodos utilizados para realizar el Analisis de datos
class Methods:
    
        
    # Metodo : Conteo por periodo
    @staticmethod
    def count_data(df, columns=None):
        data_dict = {}
        
        # Validación si no se especifican columnas, se toman todas las columnas del DataFrame
        if columns is None:
            columns = df.columns
        
        # Columnas a excluir
        exclude_columns = ['LugarDeNacimiento', 'CiudadNacimiento', 'LugarResidencia', 'CiudadResidencia']
        
        def unify_estrato_data(data):
            unified_data = {
                "1": data.get("1 (bajo - bajo)", 0) + data.get("1", 0),
                "2": data.get("2 (bajo)", 0) + data.get("2", 0),
                "3": data.get("3 (medio - bajo)", 0) + data.get("3", 0),
                "4": data.get("4 (medio)", 0) + data.get("4", 0),
                "5": data.get("5 (medio - alto)", 0) + data.get("5", 0),
                "no sabe / no responde": data.get("no sabe / no responde", 0) + data.get("no informa", 0),
                "6": data.get("6", 0),
                "7 o mas": data.get("7 o mas", 0)
            }
            return unified_data
        
        
        for column in columns:
            # Validar si la columna no está en el DataFrame
            if column not in df.columns:
                print(f"Column '{column}' not found in DataFrame.")
                continue
            
            # Validar si la columna está en la lista de columnas a excluir
            if column in exclude_columns:
                continue
            
            column_data = df[column]
            
            # Verificar si los valores en la columna están separados por comas
            if any("," in str(value) for value in column_data):
                combined_values = ",".join(column_data.astype(str))  # Combinar todos los valores de la columna en una cadena
                individual_values = [value.strip() for value in combined_values.split(",")]  # Separar los valores individualmente
                
                option_counts = {}
                for value in individual_values:
                    if value in option_counts:
                        option_counts[value] += 1
                    else:
                        option_counts[value] = 1
                
                data_dict[column] = option_counts
            else:
                # Si los valores no están separados por comas, contar las ocurrencias de valores únicos
                value_counts = column_data.value_counts().to_dict()
                data_dict[column] = value_counts
                
        unified_estrato_data = unify_estrato_data(data_dict["EstratoSocioEconomico"])
        data_dict["EstratoSocioEconomico"] = unified_estrato_data
        
        return data_dict



    # Metodo Filtrar el data frame a los datos especificados    
    def filter_data(df, item, item_data):
        try:
            
            print("Columna : ",item, " Dato : ", item_data)
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
    
    
    @staticmethod
    def count_data_historic(df, columns_to_count):
        def unify_estrato_data(data):
            unified_data = {
                "1": data.get("1 (bajo - bajo)", 0) + data.get("1", 0),
                "2": data.get("2 (bajo)", 0) + data.get("2", 0),
                "3": data.get("3 (medio - bajo)", 0) + data.get("3", 0),
                "4": data.get("4 (medio)", 0) + data.get("4", 0),
                "5": data.get("5 (medio - alto)", 0) + data.get("5", 0),
                "no sabe / no responde": data.get("no sabe / no responde", 0) + data.get("no informa", 0),
                "6": data.get("6", 0),
                "7 o mas": data.get("7 o mas", 0)
            }
            return unified_data
        
        # def unify_cantidad_personas(data):
        #     unified_data = {
        #         "1": data.get("1", 0) + data.get("1.0", 0),
        #         "2": data.get("2", 0) + data.get("2.0", 0),
        #         "3": data.get("3", 0) + data.get("3.0", 0),
        #         "ninguna": data.get("ninguna", 0)
        #     }
        #     return unified_data
        
        results = {}
        
        for column_name in columns_to_count:
            if column_name in df.columns:
                column_data = df[column_name]
                
                # Verificar si los valores en la columna están separados por comas
                if any("," in str(value) for value in column_data):
                    combined_values = ",".join(column_data.astype(str))  # Combinar todos los valores de la columna en una cadena
                    individual_values = [value.strip() for value in combined_values.split(",")]  # Separar los valores individualmente
                    
                    option_counts = {}
                    for value in individual_values:
                        if value in option_counts:
                            option_counts[value] += 1
                        else:
                            option_counts[value] = 1
                    
                    results[column_name] = option_counts
                else:
                    # Si los valores no están separados por comas, contar las ocurrencias de valores únicos
                    value_counts = column_data.value_counts().to_dict()
                    results[column_name] = value_counts
            else:
                print(f"Column '{column_name}' not found in DataFrame.")
        
        # Llamar a la función para unificar los datos de estrato socioeconómico
        if "EstratoSocioEconomico" in results:
            unified_estrato_data = unify_estrato_data(results["EstratoSocioEconomico"])
            results["EstratoSocioEconomico"] = unified_estrato_data
            
        # if "CantidadPersonasCargoEconomicamente" in results:
        #     unified_cantidad_personas = unify_cantidad_personas(results["CantidadPersonasCargoEconomicamente"])
        #     results["CantidadPersonasCargoEconomicamente"] = unified_cantidad_personas
        
        return results

    
    
    # Metodo : Buscar items - Opciones de filtro
    def items_filter(df, item):
        
        # Verificar si el ítem especificado está en el DataFrame
        if item not in df.columns:
            return f"El ítem '{item}' no está presente en el DataFrame."
        
        # Obtener las opciones únicas de la columna especificada
        options = df[item].unique().tolist()
        
        return options
    
    