import express from 'express';
import { createAula, deleteAula, getAulaById, getAulas, updateAula } from '../controllers/AulasController.js';
import { createBitacora, deleteBitacora, getBitacora, getBitacoraById, updateBitacora } from '../controllers/BitacoraController.js';
import { createClima, deleteClima, getClimaById, getClimas, updateClima } from '../controllers/ClimasController.js';
import { createDispositivoMac, deleteDispositivoMac, getDispositivoMacById, getDispositivosMac, updateDispositivoMac } from '../controllers/DispositivosMacController.js';
import { createHistorialReporte, deleteHistorialReporte, getHistorialReporteById, getHistorialReportes, updateHistorialReporte } from '../controllers/HistorialReportesController.js';
import { createHora, deleteHora, getHoraById, getHoras, updateHora } from '../controllers/HorasController.js';
import { createMantenimiento, deleteMantenimiento, getMantenimientoById, getMantenimientos, updateMantenimiento } from '../controllers/MantenimientoController.js';
import { createReporte, deleteReporte, getReporteById, getReportes, updateReporte } from '../controllers/ReportesController.js';
import { createHistorialDatosSensor , getHistorialDatosSensorByMac, getHistorialDatosSensores } from '../controllers/SensoresController.js';
import { createTipoMantenimiento, deleteTipoMantenimiento, getTipoMantenimientoById, getTiposMantenimiento, updateTipoMantenimiento } from '../controllers/TipoMantenimientoController.js';
import { createTipoReporte, deleteTipoReporte, getTipoReporteById, getTiposReporte, updateTipoReporte } from '../controllers/TipoReporteController.js';
import { createTipoDeTrabajador, deleteTipoDeTrabajador, getTipoDeTrabajadorById, getTiposDeTrabajador, updateTipoDeTrabajador } from '../controllers/TipoTrabajadorController.js';
import { createTrabajador, deleteTrabajador, getTrabajadorById, getTrabajadores, updateTrabajador } from '../controllers/TrabajadoresController.js';

const router = express.Router();

//VERIFICAR QUE EL PARAMETRO TRANSFERIDO POR LA RUTA SEA EL MISMO
//SOLICITADO EN EL CONTROLADOR {ID}

// Rutas para las aulas
router.get('/aulas', getAulas); // Obtener todas las aulas
router.get('/aulas/:id', getAulaById); // Obtener una aula por su ID
router.post('/aulas', createAula); // Crear una nueva aula
router.put('/aulas/:id', updateAula); // Actualizar una aula existente
router.delete('/aulas/:id', deleteAula); // Eliminar una aula existente

// Rutas para la bitácora
router.get('/bitacora', getBitacora); // Obtener todos los registros de la bitácora
router.get('/bitacora/:id', getBitacoraById); // Obtener un registro de la bitácora por su ID
router.post('/bitacora', createBitacora); // Crear un nuevo registro en la bitácora
router.put('/bitacora/:id', updateBitacora); // Actualizar un registro de la bitácora
router.delete('/bitacora/:id', deleteBitacora); // Eliminar un registro de la bitácora

// Rutas para los climas
router.post('/climas', createClima); // Crear un nuevo registro de clima
router.get('/climas', getClimas); // Obtener todos los registros de clima
router.get('/climas/:id', getClimaById); // Obtener un registro de clima por su ID
router.put('/climas/:id', updateClima); // Actualizar un registro de clima
router.delete('/climas/:id', deleteClima); // Eliminar un registro de clima

// Rutas para los dispositivos MAC
router.post('/dispositivos-mac', createDispositivoMac); // Crear un nuevo dispositivo MAC
router.get('/dispositivos-mac', getDispositivosMac); // Obtener todos los dispositivos MAC
router.get('/dispositivos-mac/:id', getDispositivoMacById); // Obtener un dispositivo MAC por su ID
router.put('/dispositivos-mac/:id', updateDispositivoMac); // Actualizar un dispositivo MAC
router.delete('/dispositivos-mac/:id', deleteDispositivoMac); // Eliminar un dispositivo MAC

// Rutas para el historial de reportes
router.post('/historial-reportes', createHistorialReporte); // Crear un nuevo registro en el historial de reportes
router.get('/historial-reportes', getHistorialReportes); // Obtener todos los registros en el historial de reportes
router.get('/historial-reportes/:id', getHistorialReporteById); // Obtener un registro en el historial de reportes por su ID
router.put('/historial-reportes/:id', updateHistorialReporte); // Actualizar un registro en el historial de reportes
router.delete('/historial-reportes/:id', deleteHistorialReporte); // Eliminar un registro en el historial de reportes

// Rutas para las horas
router.post('/horas', createHora); // Crear una nueva hora
router.get('/horas', getHoras); // Obtener todas las horas
router.get('/horas/:id', getHoraById); // Obtener una hora por su clave
router.put('/horas/:id', updateHora); // Actualizar una hora
router.delete('/horas/:id', deleteHora); // Eliminar una hora

// Rutas para los mantenimientos
router.post('/mantenimientos', createMantenimiento); // Crear un nuevo registro de mantenimiento
router.get('/mantenimientos', getMantenimientos); // Obtener todos los registros de mantenimiento
router.get('/mantenimientos/:id', getMantenimientoById); // Obtener un registro de mantenimiento por su ID
router.put('/mantenimientos/:id', updateMantenimiento); // Actualizar un registro de mantenimiento
router.delete('/mantenimientos/:id', deleteMantenimiento); // Eliminar un registro de mantenimiento

// Rutas para los reportes
router.post('/reportes', createReporte); // Crear un nuevo reporte
router.get('/reportes', getReportes); // Obtener todos los reportes
router.get('/reportes/:id', getReporteById); // Obtener un reporte por su ID
router.put('/reportes/:id', updateReporte); // Actualizar un reporte
router.delete('/reportes/:id', deleteReporte); // Eliminar un reporte

// Rutas para el historial de datos de sensores
router.post('/historial-datos-sensores', createHistorialDatosSensor); // Crear un nuevo registro en el historial de datos de sensores
router.get('/historial-datos-sensores', getHistorialDatosSensores); // Obtener todos los registros en el historial de datos de sensores
router.get('/historial-datos-sensores/:mac', getHistorialDatosSensorByMac); // Obtener un registro en el historial de datos de sensores por su ID

// Rutas para el tipo de mantenimiento
router.post('/tipos-mantenimiento', createTipoMantenimiento); // Crear un nuevo tipo de mantenimiento
router.get('/tipos-mantenimiento', getTiposMantenimiento); // Obtener todos los tipos de mantenimiento
router.get('/tipos-mantenimiento/:id', getTipoMantenimientoById); // Obtener un tipo de mantenimiento por su ID
router.put('/tipos-mantenimiento/:id', updateTipoMantenimiento); // Actualizar un tipo de mantenimiento
router.delete('/tipos-mantenimiento/:id', deleteTipoMantenimiento); // Eliminar un tipo de mantenimiento

// Rutas para el tipo de reporte
router.post('/tipos-reporte', createTipoReporte); // Crear un nuevo tipo de reporte
router.get('/tipos-reporte', getTiposReporte); // Obtener todos los tipos de reporte
router.get('/tipos-reporte/:id', getTipoReporteById); // Obtener un tipo de reporte por su ID
router.put('/tipos-reporte/:id', updateTipoReporte); // Actualizar un tipo de reporte
router.delete('/tipos-reporte/:id', deleteTipoReporte); // Eliminar un tipo de reporte

// Rutas para el tipo de trabajador
router.post('/tipos-trabajador', createTipoDeTrabajador); // Crear un nuevo tipo de trabajador
router.get('/tipos-trabajador', getTiposDeTrabajador); // Obtener todos los tipos de trabajador
router.get('/tipos-trabajador/:id', getTipoDeTrabajadorById); // Obtener un tipo de trabajador por su ID
router.put('/tipos-trabajador/:id', updateTipoDeTrabajador); // Actualizar un tipo de trabajador
router.delete('/tipos-trabajador/:id', deleteTipoDeTrabajador); // Eliminar un tipo de trabajador

// Rutas para el trabajador
router.post('/trabajadores', createTrabajador); // Crear un nuevo trabajador
router.get('/trabajadores', getTrabajadores); // Obtener todos los trabajadores
router.get('/trabajadores/:id', getTrabajadorById); // Obtener un trabajador por su ID
router.put('/trabajadores/:id', updateTrabajador); // Actualizar un trabajador
router.delete('/trabajadores/:id', deleteTrabajador); // Eliminar un trabajador

export default router;