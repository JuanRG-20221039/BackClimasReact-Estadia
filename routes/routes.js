import express from 'express';

import { getAulas, crearAula, getAulaById, actualizarAula, eliminarAula, getAulasPorEdificio, getAulaPorNombreEdificioTipo, getAulaPorNombreYEdificio } from '../controllers/aulasController.js';
import { getClimas, getClimaById, createClima, updateClima, deleteClima, getClimasPorMarca, getClimaByVinculacionId } from '../controllers/climasController.js';
import { getDias, createDia, updateDia, deleteDia } from '../controllers/diasController.js';
import { getEdificios, createEdificio, updateEdificio, deleteEdificio, getEdificioPorNombre  } from '../controllers/edificiosController.js';
import { getHistorialAcceso, createRegistroAcceso } from '../controllers/historialAccesoController.js';
import { getHistoricoIOT, createRegistroHistoricoIOT, deleteRegistrosByVinculacionId } from '../controllers/historicoIOTController.js';
import { getHorarios, getHorario, createHorario, updateHorario, deleteHorario, getHorariosPorAula } from '../controllers/horarioController.js';
import { getHoras, getHora, createHora, updateHora, deleteHora } from '../controllers/horasController.js';
import { getIoTDevices, getIoTDevice, createIoTDevice, updateIoTDevice, deleteIoTDevice, getIoTDeviceByMac, getIoTDeviceMacById } from '../controllers/iotController.js';
import { getMarcas, getMarca, createMarca, updateMarca, deleteMarca, getMarcaByNombre } from '../controllers/marcaController.js';
import { getPerfiles, getPerfil, createPerfil, updatePerfil, deletePerfil } from '../controllers/perfilController.js';
import { getReportesUsuario, getReporteUsuario, createReporteUsuario, updateReporteUsuario, deleteReporteUsuario, getReportesPorAula } from '../controllers/reporteUsuarioController.js';
import { getTiposReporte, getTipoReporte, createTipoReporte, updateTipoReporte, deleteTipoReporte } from '../controllers/tipoReporteController.js';
import { getTiposTrabajadores, getTipoTrabajador, createTipoTrabajador, updateTipoTrabajador, deleteTipoTrabajador } from '../controllers/tipoTrabajadorController.js';
import { getTrabajadores, createTrabajador, updateTrabajador, deleteTrabajador, obtenerTrabajadorPorClave, getTrabajadorPorCorreo, iniciarSesionConClave, iniciarSesionConCorreo, getTrabajadorPorId } from '../controllers/trabajadorController.js';
import { getUbicacionesClimas, getUbicacionClima, createUbicacionClima, updateUbicacionClima, deleteUbicacionClima, getUbicacionesClimasPorAula, getUbicacionClimaPorIdClima } from '../controllers/ubicacionClimaController.js';
import { getVinculacionesIot, getVinculacionIot, createVinculacionIot, updateVinculacionIot, deleteVinculacionIot, getModuloIotById } from '../controllers/vinculacionIotController.js';
import { createTipoAula, deleteTipoAula, getTipoAulaById, getTiposAula, updateTipoAula } from '../controllers/tiposAulasController.js';

const router = express.Router();

//NOTA - VERIFICAR QUE SIEMPRE SE NOMBREN LOS CAMPOS DEL BACK AL IGUAL QUE
// EN LA PETICION DE LA URL: /vinculacion/:    >>>Id_vinculacion_iot<<<

//AULAS-------------------------------------------------------------------
router.get('/aulas', getAulas);
router.post('/aulas', crearAula);
router.get('/aulas/:id', getAulaById);
router.put('/aulas/:id', actualizarAula);
router.delete('/aulas/:id', eliminarAula);
router.get('/aulas/edificio/:idEdificio', getAulasPorEdificio);
router.get('/aulas/nombre/:nombreAula/edificio/:idEdificio', getAulaPorNombreYEdificio);
router.get('/aulas/nombre/:nombreAula/edificio/:idEdificio/tipo/:idTipo', getAulaPorNombreEdificioTipo);

//TIPOS AULA-------------------------------------------------------------------
router.get('/tipos-aula', getTiposAula);
router.get('/tipos-aula/:Id_tipo_aula', getTipoAulaById);
router.post('/tipos-aula', createTipoAula);
router.put('/tipos-aula/:Id_tipo_aula', updateTipoAula);
router.delete('/tipos-aula/:Id_tipo_aula', deleteTipoAula);

//CLIMAS-------------------------------------------------------------------
router.get('/climas', getClimas);
router.get('/climas/:id', getClimaById);
router.post('/climas', createClima);
router.put('/climas/:id', updateClima);
router.delete('/climas/:id', deleteClima);
router.get('/climas/marca/:idMarca', getClimasPorMarca);
router.get('/climas/vinculacion/:idVinculacion', getClimaByVinculacionId);

//DIAS-------------------------------------------------------------------
router.get('/dias', getDias);
router.post('/dias', createDia);
router.put('/dias/:id', updateDia);
router.delete('/dias/:id', deleteDia);

//EDIFICIOS-------------------------------------------------------------------
router.get('/edificios', getEdificios);
router.post('/edificios', createEdificio);
router.put('/edificios/:id', updateEdificio);
router.delete('/edificios/:id', deleteEdificio);
router.get('/edificios/nombre/:nombre', getEdificioPorNombre);

//HISTORIAL DE ACCESO -------------------------------------------------------------------
router.get('/historial-acceso', getHistorialAcceso);
router.post('/historial-acceso', createRegistroAcceso);

//HISTORICO IOT -------------------------------------------------------------------
router.get('/historico-iot', getHistoricoIOT);
router.post('/historico-iot', createRegistroHistoricoIOT);
router.delete('/historico/eliminar/:id', deleteRegistrosByVinculacionId);

//HORARIOS-------------------------------------------------------------------
router.get('/horarios', getHorarios);
router.get('/horarios/:Id_horario', getHorario);
router.post('/horarios', createHorario);
router.put('/horarios/:Id_horario', updateHorario);
router.delete('/horarios/:Id_horario', deleteHorario);
router.get('/horarios/aula/:idAula', getHorariosPorAula);

//HORAS-------------------------------------------------------------------
router.get('/horas', getHoras);
router.get('/horas/:Id_horas', getHora);
router.post('/horas', createHora);
router.put('/horas/:Id_horas', updateHora);
router.delete('/horas/:Id_horas', deleteHora);

//IOT -------------------------------------------------------------------
router.get('/iot', getIoTDevices);
router.get('/iot/:Id_iot', getIoTDevice);
router.post('/iot', createIoTDevice); 
router.put('/iot/:Id_iot', updateIoTDevice);
router.delete('/iot/:Id_iot', deleteIoTDevice);
router.get('/iot/mac/:mac', getIoTDeviceByMac);
router.get('/iot/mac_id/:Id_iot', getIoTDeviceMacById);

//MARCAS-------------------------------------------------------------------
router.get('/marcas', getMarcas);
router.get('/marcas/:Id_marca', getMarca);
router.post('/marcas', createMarca);
router.put('/marcas/:Id_marca', updateMarca);
router.delete('/marcas/:Id_marca', deleteMarca);
router.get('/marcas/nombre/:nombre', getMarcaByNombre);

//PERFILES -------------------------------------------------------------------
router.get('/perfiles', getPerfiles);
router.get('/perfiles/:Id_perfil', getPerfil);
router.post('/perfiles', createPerfil);
router.put('/perfiles/:Id_perfil', updatePerfil);
router.delete('/perfiles/:Id_perfil', deletePerfil);

//REPORTES USUARIOS -------------------------------------------------------------------
router.get('/reportesUsuario', getReportesUsuario);
router.get('/reportesUsuario/:Id_reporte_usuario', getReporteUsuario);
router.post('/reportesUsuario', createReporteUsuario);
router.put('/reportesUsuario/:Id_reporte_usuario', updateReporteUsuario);
router.delete('/reportesUsuario/:Id_reporte_usuario', deleteReporteUsuario);
router.get('/reportes/aula/:idAula', getReportesPorAula);

//TIPOS DE REPORTE -------------------------------------------------------------------
router.get('/tiposReporte', getTiposReporte);
router.get('/tiposReporte/:Id_tipo_reporte', getTipoReporte);
router.post('/tiposReporte', createTipoReporte);
router.put('/tiposReporte/:Id_tipo_reporte', updateTipoReporte);
router.delete('/tiposReporte/:Id_tipo_reporte', deleteTipoReporte);

//TIPOS DE TRABAJADORES -------------------------------------------------------------------
router.get('/tiposTrabajadores', getTiposTrabajadores);
router.get('/tiposTrabajadores/:Id_tipo_de_trabajador', getTipoTrabajador);
router.post('/tiposTrabajadores', createTipoTrabajador);
router.put('/tiposTrabajadores/:Id_tipo_de_trabajador', updateTipoTrabajador);
router.delete('/tiposTrabajadores/:Id_tipo_de_trabajador', deleteTipoTrabajador);

//TRABAJADORES -------------------------------------------------------------------
router.get('/trabajadores', getTrabajadores);
router.get('/trabajadores/:Id_clave_trabajador', getTrabajadorPorId);
router.post('/trabajadores', createTrabajador);
router.put('/trabajadores/:Id_clave_trabajador', updateTrabajador);
router.delete('/trabajadores/:Id_clave_trabajador', deleteTrabajador);
router.get('/trabajadores/correo/:correo', getTrabajadorPorCorreo);
router.get('/trabajadores/loginClave', iniciarSesionConClave); //para iniciar sesion el la movil
router.post('/trabajadores/loginCorreo', iniciarSesionConCorreo); //para iniciar sesion en la web
router.get('/trabajadores/clave/:Clave_trabajador', obtenerTrabajadorPorClave);

//UBICACIONES CLIMAS -------------------------------------------------------------------
router.get('/ubicaciones-climas', getUbicacionesClimas);
router.get('/ubicaciones-climas/:Id_ubicacion_Clima', getUbicacionClima);
router.post('/ubicaciones-climas', createUbicacionClima);
router.put('/ubicaciones-climas/:Id_ubicacion_Clima', updateUbicacionClima);
router.delete('/ubicaciones-climas/:Id_ubicacion_Clima', deleteUbicacionClima);
router.get('/ubicaciones_climas/aula/:idAula', getUbicacionesClimasPorAula);
router.get('/ubicaciones-climas/clima/:idClima', getUbicacionClimaPorIdClima);

//VINCULACION IOT -------------------------------------------------------------------
router.get('/vinculacion', getVinculacionesIot);
router.get('/vinculacion/:Id_vinculacion_iot', getVinculacionIot);
router.post('/vinculacion', createVinculacionIot);
router.put('/vinculacion/:Id_vinculacion_iot', updateVinculacionIot);
router.delete('/vinculacion/:Id_vinculacion_iot', deleteVinculacionIot);
router.get('/vinculacion/modulo/:id', getModuloIotById); //Id del iot

export default router;