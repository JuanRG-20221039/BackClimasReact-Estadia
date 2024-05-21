import HistorialDatosSensoresModel from '../models/SensoresModel.js';

// Crear un nuevo registro en el historial de datos de sensores
export const createHistorialDatosSensor = async (req, res) => {
    const { clv_aula, vch_mac_dispositivo, variable, valor, fecha_hora } = req.body;
    try {
        const nuevoRegistro = await HistorialDatosSensoresModel.create({ 
            clv_aula, 
            vch_mac_dispositivo, 
            variable, 
            valor, 
            fecha_hora 
        });
        res.status(201).json(nuevoRegistro);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el registro en el historial de datos de sensores' });
    }
};

// Obtener todos los registros en el historial de datos de sensores
export const getHistorialDatosSensores = async (req, res) => {
    try {
        const historial = await HistorialDatosSensoresModel.findAll({
            attributes: ['clv_aula', 'vch_mac_dispositivo', 'variable', 'valor', 'fecha_hora']
        });
        res.json(historial);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los registros en el historial de datos de sensores' });
    }
};

// Obtener un registro en el historial de datos de sensores por su MAC
export const getHistorialDatosSensorByMac = async (req, res) => {
    const { mac } = req.params;
    try {
        const registro = await HistorialDatosSensoresModel.findAll({ where: { vch_mac_dispositivo: mac }, attributes: ['clv_aula', 'vch_mac_dispositivo', 'variable', 'valor', 'fecha_hora'] });
        if (registro) {
            res.json(registro);
        } else {
            res.status(404).json({ error: 'Registro en el historial de datos de sensores no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el registro en el historial de datos de sensores' });
    }
};