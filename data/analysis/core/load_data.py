### Librerias de python
import pandas as pd
import unidecode


## Carga los datos de los archivos excel en dataframes  
class LoadData:
    
    ## Metodo : Cargar el dataframe de pregrado
    def load_data_under(self, route):
        
        try :
                    
            print('Cargado archivo de la ruta : ', route)
            df = pd.read_excel(route)
            
            df = df.fillna('No Responde')
            
            # Normalizar el texto - Minusculas
            for column in df.columns:
                df[column] = df[column].apply(lambda x:x.lower() if isinstance(x, str) else x)  
            
            # Normalizar el texto - Omitir acentos
            for column in df.columns:
                df[column] = df[column].apply(lambda x: unidecode.unidecode(x) if isinstance(x, str) else x)

            # Eliminar espacios innecesarios -> (Xxxxx )
            for column in df.columns:
                df[column] = df[column].apply(lambda x: ' '.join(x.split()) if isinstance(x, str) else x)

            # Columnas excedentes
            columns_delete = ['MarcaTemporal','NombreCompleto','Codigo','CorreoElectronico','Sugerencias','JustificacionRecomendacion','JustificacionPercepcion','NombreMedioComunicacion','FactoresTiempoTranscurrido']
            
            # Elimina las columnas excedentes si estan presentes
            for col in columns_delete:
                if col in df.columns:
                    df = df.drop(col,axis=1)
                
            return df
          
        except FileNotFoundError as e:
            
            print('Error : El archivo no se ha encontrado en la ruta especificada')
            return None
        
    
    ## Metodo : Cargar el dataframe de posgrado
    def load_data_post(self, route):
        
        try :
                    
            print('Cargado archivo de la ruta : ', route)
            df = pd.read_excel(route)
            
            df = df.fillna('no-responde')
            
            # Normalizar el texto - Minusculas
            for column in df.columns:
                df[column] = df[column].apply(lambda x:x.lower() if isinstance(x, str) else x)  
            
            # Nomalizar el texto - Omitir acentuacion
            for column in df.columns:
                df[column] = df[column].apply(lambda x: unidecode.unidecode(x) if isinstance(x, str) else x)
            
            # Eliminar espacios innecesarios -> (Xxxxx )
            for column in df.columns:
                df[column] = df[column].apply(lambda x: ' '.join(x.split()) if isinstance(x, str) else x)
                
            # Elimina columnas excedentes
            columns_delete = ['Nombre','NombreEmpresa','JustificacionTiempoIngresoPost','JustificacionRecomendacion','Comentarios','LugarDeNacimiento','CiudadNacimiento','LugarResidencia','CiudadResidencia']
            
            # Columnas excedentes
            for col in columns_delete:
                if col in df.columns:
                    df = df.drop(col,axis=1)
                
            return df
          
        except FileNotFoundError as e:
            
            print('Error : El archivo no se ha encontrado en la ruta especificada')
            return None
    
   