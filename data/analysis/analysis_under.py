import os
import pandas as pd
from .load_data import LoadData
from .methods import Methods


### Todo : Realiza el Analisis de Datos de los archivos de Pregrado
class AnalysisUnder:
    
    ## ? Funcion : Carga las rutas de los archivos del Banco de Datos
    def __init__(self):
    
        # * Paths rutas Pregrado
        self.files_paths_under = {
            '2022-1': 'resources/under/2022-1.xlsx',
            '2022-2': 'resources/under/2022-2.xlsx',
        }
        self.informacion_personal = ['Sede', 'ProgramaAcademico', 'DoblePrograma', 'SedeDoblePrograma','ProgramaDoblePrograma','Sexo','ConviveCon','CantidadPersonasCargoEconomicamente']
        self.percepcion = ['PercepcionEquiposMediosTecnlogicos', 'PercepcionCalidadDocentes', 'PercepcionPlanesEstudio','PercepcionServicioUsuario',
                           'PercepcionProcesosPedagogicos','PercepcionSistemaEvaluacion','PercepcionImagenGeneral','SatisfaccionChatLinea','SatisfaccionFormularioPaginaWeb',
                           'SatisfaccionWhatsapp','SatisfaccionMessenger','SatisfaccionCorreoElectronico','SatisfaccionPuntoAtenciónPresencial'
                           ]
        self.educacion_previa = ['JornadaBachillerato', 'ValidacionBachillerato', 'InstitucionBachilleratoBilingue','InconclusionEstudiosPrevios','NivelIdiomaIngles', 'NivelIdiomaFrances',
                                'NivelIdiomaItaliano', 'NivelIdiomaAleman'
                                ]


    ## ? Funcion : Valida el tipo de Analisis que se va a aplicar 
    def analysis_data_under(self, interval, lapse, category):
        
        print ('Datos : ' ,interval, lapse, category )
        if (interval == 'Semestral'):
            print('Analisis Semestral : ')
            data = self.analysis_data_semester(lapse, category)
        
        elif (interval == 'Anual'):
            print('Analisis Anual : ')
            data = self.analysis_data_year(lapse, category)
        
        elif (interval == 'General'):
            print('Analisis General : ')
            data = self.analysis_data_general(category)
        
        return data
    
    
    ## ? Funcion : Analisis de Datos - Conteo Semestral
    def analysis_data_semester(self, lapse, category):
        
        print('Lapso : ', lapse, 'Categoria : ',category)
        # * Path
        directory = os.path.dirname(os.path.abspath(__file__))       
        file_path = os.path.join(directory, self.files_paths_under[lapse])
        
        # * Carga los datos
        load_df = LoadData()
        df = load_df.load_data_under(file_path)
        
        if(category == 'Informacion Personal'):     
            print('Conteo Informacion Personal')
            data_dic = Methods.count_data(df, self.informacion_personal)
        
        elif (category == 'Percepcion y Satisfaccion'):
            print('Conteo Percepcion y Satisfaccion')
            data_dic = Methods.count_data(df, self.percepcion)
            
        elif (category == 'Educacion Previa'):
            print('Conteo Educacion Previa')
            data_dic = Methods.count_data(df, self.educacion_previa)
        
        return data_dic
    
    
    ## ? Funcion : Analisis de Datos - Conteo Anual
    def analysis_data_year(self, lapse, category):
        
         # * Obtener el directorio actual del script
        directory = os.path.dirname(os.path.abspath(__file__))   
        
        # * Obtener la lista de archivos que coinciden con el año proporcionado en lapse
        matching_files = [filename for year, filename in self.files_paths_under.items() if str(lapse) in year]

        # * Verificar si hay archivos correspondientes al año proporcionado
        if not matching_files:
            print(f"No se encontraron archivos para el año {lapse}.")
            return None

        # * Cargar y concatenar los DataFrames de los archivos correspondientes al año
        dfs = []
        for file_path in matching_files:
            full_path = os.path.join(directory, file_path)
            load_df = LoadData()
            df = load_df.load_data_under(full_path)
            dfs.append(df)
        
        concatenated_df = pd.concat(dfs, ignore_index=True)

        # * Realizar el conteo utilizando el método count_data_year
        data_dict = Methods.count_data_year(concatenated_df, self.informacion_personal)
        
        # * Imprimir el diccionario resultante
        print('Diccionario : ', data_dict)

        return data_dict
    
    
    ## ? Funcion : Analisis de Datos - Conteo General
    def analysis_data_general (self, category):
        # Obtener el directorio actual del script
        directory = os.path.dirname(os.path.abspath(__file__))

        # Obtener la lista de todos los archivos especificados en el diccionario
        all_files = [os.path.join(directory, file_path) for file_path in self.files_paths_under.values()]

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

        # Realizar el conteo utilizando el método count_data_year
        data_dict = Methods.count_data_year(concatenated_df, self.informacion_personal)

        # Imprimir el diccionario resultante
        print('Diccionario : ', data_dict)

        return data_dict
    