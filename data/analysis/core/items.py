### Clase Items DataFrames
class Items:
    
    ## Items Pregrado
    
    # Items categoria informacion personal
    informacion_personal =  ['ProgramaAcademico', 'Sede', 'DoblePrograma', 'SedeDoblePrograma','ProgramaDoblePrograma','Sexo','Edad','EstadoCivil','NumeroHijos','ConviveCon',
                        'PersonasACargo','CantidadPersonasCargoEconomicamente','EstratoSocioEconomico']
     
    # Items categoria informacion familiar   
    informacion_familiar = ["PadreVive", "MadreVive", "EstadoCivilPadres", "ConviveCon", "OcupacionPadre", "OcupacionMadre", "OcupacionConyuge", "OcupacionHermanoMayor",
                            "OcupacionHermanoMenor", "NivelEducativoPadre", "NivelEducativoMadre", "NivelEducativoConyuge", "NivelEducativoHermanoMayor", "NivelEducativoHermanoMenor"]

    # Items categoria estado socioeconomico
    estado_socioeconomico = ["IngresosPadre", "IngresosMadre", "IngresosConyuge", "IngresosPropios", "IngresosComplementarios", "RazonIngresosComplementarios", "GastosEducativos"]
    
    # Items categoria educacion previa
    educacion_previa = ['EdadConclusionBachillerato','TipoColegio','TituloBachillerato','JornadaBachillerato', 'ValidacionBachillerato', 'InstitucionBachilleratoBilingue','TiempoTituloBachillerato',
                        'InconclusionEstudiosPrevios','MotivoInconclusionEstudios','TiempoTranscurridoIngresoUniversidad','TituloPrevioUniversidad','TipoTituloPrevio','FactoresSeleccionCarrera',
                        'NivelIdiomaIngles', 'NivelIdiomaFrances','NivelIdiomaItaliano', 'NivelIdiomaAleman']
    
    # Items categoria contexto social y personal 
    datos_etnicos = ["PerteneceGrupoEtnico", "GrupoEtnico", "ComunidadLGBTI", "Discapacidad", "TipoDiscapacidad", "VictimaConflictoArmado"]

    # Items categoria estilo de vida y percepcion
    datos_actividades = ["PracticaDeporte", "Deporte", "GrupoCultural", "GrupoCulturalNombre", "CantidadLectura", "FrecuenciaFumar", "FrecuenciaBebidasAlcoholicas", "FrecuenciaSustanciasPsicoactivas"]
    
    # Items categoria percepcion
    percepcion = ['PercepcionEquiposMediosTecnlogicos', 'PercepcionCalidadDocentes', 'PercepcionPlanesEstudio','PercepcionServicioUsuario',
                'PercepcionProcesosPedagogicos','PercepcionSistemaEvaluacion','PercepcionImagenGeneral','SatisfaccionChatLinea','SatisfaccionFormularioPaginaWeb',
                'SatisfaccionWhatsapp','SatisfaccionMessenger','SatisfaccionCorreoElectronico','SatisfaccionPuntoAtenciónPresencial']
        
           
    ## Items Posgrado
    
    # Items categoria informacion personal
    informacion_personal_post = ['ProgramaAcademico', 'AlternativaDeGrado', 'Sede','Genero','Edad','EstadoCivil', 'CantidadHijos']
    
        
    # Items categoria percepcion
    percepcion_post = ['PercepcionEquiposTecnlogicos','PercepcionInstalaciones', 'PercepcionCalidadDocentes', 'PercepcionPlanesEstudio','PercepcionServicioAlUsuario',
                           'PercepcionProcesosPedagogicos','PercepcionGeneralUniversidad']
    
    
    ### Items Historico
    
    # Items Predeterminados
    historico_prueba = ['Sede','Sexo','EstadoCivil','PercepcionCalidadDocentes',]
