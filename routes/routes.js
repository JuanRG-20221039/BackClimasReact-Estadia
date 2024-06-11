import express from 'express';

import { getAulas, crearAula, getAulaById, actualizarAula, eliminarAula, getAulasPorEdificio, getAulaPorNombreYEdificio } from '../controllers/aulasController.js';
import { getClimas, getClimaById, createClima, updateClima, deleteClima } from '../controllers/climasController.js';
import { getDias, createDia, updateDia, deleteDia } from '../controllers/diasController.js';
import { getEdificios, createEdificio, updateEdificio, deleteEdificio, getEdificioPorNombre  } from '../controllers/edificiosController.js';
import { getHistorialAcceso, createRegistroAcceso } from '../controllers/historialAccesoController.js';
import { getHistoricoIOT, createRegistroHistoricoIOT } from '../controllers/historicoIOTController.js';
import { getHorarios, getHorario, createHorario, updateHorario, deleteHorario } from '../controllers/horarioController.js';
import { getHoras, getHora, createHora, updateHora, deleteHora } from '../controllers/horasController.js';
import { getIoTDevices, getIoTDevice, createIoTDevice, updateIoTDevice, deleteIoTDevice } from '../controllers/iotController.js';
import { getMarcas, getMarca, createMarca, updateMarca, deleteMarca } from '../controllers/marcaController.js';
import { getPerfiles, getPerfil, createPerfil, updatePerfil, deletePerfil } from '../controllers/perfilController.js';
import { getReportesUsuario, getReporteUsuario, createReporteUsuario, updateReporteUsuario, deleteReporteUsuario, getReportesPorAula } from '../controllers/reporteUsuarioController.js';
import { getTiposReporte, getTipoReporte, createTipoReporte, updateTipoReporte, deleteTipoReporte } from '../controllers/tipoReporteController.js';
import { getTiposTrabajadores, getTipoTrabajador, createTipoTrabajador, updateTipoTrabajador, deleteTipoTrabajador } from '../controllers/tipoTrabajadorController.js';
import { getTrabajadores, getTrabajador, createTrabajador, updateTrabajador, deleteTrabajador } from '../controllers/trabajadorController.js';
import { getUbicacionesClimas, getUbicacionClima, createUbicacionClima, updateUbicacionClima, deleteUbicacionClima, getUbicacionesClimasPorAula } from '../controllers/ubicacionClimaController.js';

const router = express.Router();

router.get('/aulas', getAulas);
router.post('/aulas', crearAula);
router.get('/aulas/:id', getAulaById);
router.put('/aulas/:id', actualizarAula);
router.delete('/aulas/:id', eliminarAula);
router.get('/aulas/edificio/:idEdificio', getAulasPorEdificio);
router.get('/aulas/nombre/:nombreAula/edificio/:idEdificio', getAulaPorNombreYEdificio);

router.get('/climas', getClimas);
router.get('/climas/:id', getClimaById);
router.post('/climas', createClima);
router.put('/climas/:id', updateClima);
router.delete('/climas/:id', deleteClima);

router.get('/dias', getDias);
router.post('/dias', createDia);
router.put('/dias/:id', updateDia);
router.delete('/dias/:id', deleteDia);

router.get('/edificios', getEdificios);
router.post('/edificios', createEdificio);
router.put('/edificios/:id', updateEdificio);
router.delete('/edificios/:id', deleteEdificio);
router.get('/edificios/nombre/:nombre', getEdificioPorNombre);

router.get('/historial-acceso', getHistorialAcceso);
router.post('/historial-acceso', createRegistroAcceso);

router.get('/historico-iot', getHistoricoIOT);
router.post('/historico-iot', createRegistroHistoricoIOT);

router.get('/horarios', getHorarios);
router.get('/horarios/:Id_horario', getHorario);
router.post('/horarios', createHorario);
router.put('/horarios/:Id_horario', updateHorario);
router.delete('/horarios/:Id_horario', deleteHorario);

router.get('/horas', getHoras);
router.get('/horas/:Id_horas', getHora);
router.post('/horas', createHora);
router.put('/horas/:Id_horas', updateHora);
router.delete('/horas/:Id_horas', deleteHora);

router.get('/iot', getIoTDevices);
router.get('/iot/:Id_iot', getIoTDevice);
router.post('/iot', createIoTDevice);
router.put('/iot/:Id_iot', updateIoTDevice);
router.delete('/iot/:Id_iot', deleteIoTDevice);

router.get('/marcas', getMarcas);
router.get('/marcas/:Id_marca', getMarca);
router.post('/marcas', createMarca);
router.put('/marcas/:Id_marca', updateMarca);
router.delete('/marcas/:Id_marca', deleteMarca);

router.get('/perfiles', getPerfiles);
router.get('/perfiles/:Id_perfil', getPerfil);
router.post('/perfiles', createPerfil);
router.put('/perfiles/:Id_perfil', updatePerfil);
router.delete('/perfiles/:Id_perfil', deletePerfil);

router.get('/reportesUsuario', getReportesUsuario);
router.get('/reportesUsuario/:Id_reporte_usuario', getReporteUsuario);
router.post('/reportesUsuario', createReporteUsuario);
router.put('/reportesUsuario/:Id_reporte_usuario', updateReporteUsuario);
router.delete('/reportesUsuario/:Id_reporte_usuario', deleteReporteUsuario);
router.get('/reportes/aula/:idAula', getReportesPorAula);

router.get('/tiposReporte', getTiposReporte);
router.get('/tiposReporte/:Id_tipo_reporte', getTipoReporte);
router.post('/tiposReporte', createTipoReporte);
router.put('/tiposReporte/:Id_tipo_reporte', updateTipoReporte);
router.delete('/tiposReporte/:Id_tipo_reporte', deleteTipoReporte);

router.get('/tiposTrabajadores', getTiposTrabajadores);
router.get('/tiposTrabajadores/:Id_tipo_de_trabajador', getTipoTrabajador);
router.post('/tiposTrabajadores', createTipoTrabajador);
router.put('/tiposTrabajadores/:Id_tipo_de_trabajador', updateTipoTrabajador);
router.delete('/tiposTrabajadores/:Id_tipo_de_trabajador', deleteTipoTrabajador);

router.get('/trabajadores', getTrabajadores);
router.get('/trabajadores/:Id_clave_trabajador', getTrabajador);
router.post('/trabajadores', createTrabajador);
router.put('/trabajadores/:Id_clave_trabajador', updateTrabajador);
router.delete('/trabajadores/:Id_clave_trabajador', deleteTrabajador);

router.get('/ubicaciones-climas', getUbicacionesClimas);
router.get('/ubicaciones-climas/:Id_ubicacion_Clima', getUbicacionClima);
router.post('/ubicaciones-climas', createUbicacionClima);
router.put('/ubicaciones-climas/:Id_ubicacion_Clima', updateUbicacionClima);
router.delete('/ubicaciones-climas/:Id_ubicacion_Clima', deleteUbicacionClima);
router.get('/ubicaciones_climas/aula/:idAula', getUbicacionesClimasPorAula);

export default router;