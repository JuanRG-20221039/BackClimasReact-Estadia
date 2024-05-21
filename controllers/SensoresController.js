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
        const historial = await HistorialDatosSensoresModel.findAll();
        res.json(historial);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los registros en el historial de datos de sensores' });
    }
};

// Obtener un registro en el historial de datos de sensores por su ID
export const getHistorialDatosSensorById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await HistorialDatosSensoresModel.findByPk(id);
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

// Actualizar un registro en el historial de datos de sensores
export const updateHistorialDatosSensor = async (req, res) => {
    const { id } = req.params;
    const { clv_aula, vch_mac_dispositivo, variable, valor, fecha_hora } = req.body;
    try {
        const registro = await HistorialDatosSensoresModel.findByPk(id);
        if (registro) {
            registro.clv_aula = clv_aula;
            registro.vch_mac_dispositivo = vch_mac_dispositivo;
            registro.variable = variable;
            registro.valor = valor;
            registro.fecha_hora = fecha_hora;
            await registro.save();
            res.json(registro);
        } else {
            res.status(404).json({ error: 'Registro en el historial de datos de sensores no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el registro en el historial de datos de sensores' });
    }
};

// Eliminar un registro en el historial de datos de sensores
export const deleteHistorialDatosSensor = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await HistorialDatosSensoresModel.findByPk(id);
        if (registro) {
            await registro.destroy();
            res.json({ message: 'Registro en el historial de datos de sensores eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Registro en el historial de datos de sensores no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el registro en el historial de datos de sensores' });
    }
};
