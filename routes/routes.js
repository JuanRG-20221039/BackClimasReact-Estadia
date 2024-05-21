import express from 'express';
import { createAula, deleteAula, getAulaById, getAulas, updateAula } from '../controllers/AulasController.js';
import { createBitacora, deleteBitacora, getBitacora, getBitacoraById, updateBitacora } from '../controllers/BitacoraController.js';
import { createClima, deleteClima, getClimaById, getClimas, updateClima } from '../controllers/ClimasController.js';
import { createDispositivoMac, deleteDispositivoMac, getDispositivoMacById, getDispositivosMac, updateDispositivoMac } from '../controllers/DispositivosMacController.js';


const router = express.Router();

//VERIFICAR QUE EL PARAMETRO TRANSFERIDO POR LA RUTA SEA EL MISMO
//SOLICITADO EN EL CONTROLADOR {ID}

// Rutas para las aulas
router.get('/aulas', getAulas);
router.get('/aulas/:id', getAulaById);
router.post('/aulas', createAula);
router.put('/aulas/:id', updateAula);
router.delete('/aulas/:id', deleteAula);

// Rutas para la bitácora
router.get('/bitacora', getBitacora);
router.get('/bitacora/:id', getBitacoraById);
router.post('/bitacora', createBitacora);
router.put('/bitacora/:id', updateBitacora);
router.delete('/bitacora/:id', deleteBitacora);

// Rutas para los climas
router.post('/climas', createClima);
router.get('/climas', getClimas);
router.get('/climas/:id', getClimaById);
router.put('/climas/:id', updateClima);
router.delete('/climas/:id', deleteClima);

// Rutas para los dispositivos MAC
router.post('/dispositivos-mac', createDispositivoMac);
router.get('/dispositivos-mac', getDispositivosMac);
router.get('/dispositivos-mac/:id', getDispositivoMacById);
router.put('/dispositivos-mac/:id', updateDispositivoMac);
router.delete('/dispositivos-mac/:id', deleteDispositivoMac);

export default router;