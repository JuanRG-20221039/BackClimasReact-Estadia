import UbicacionClima from '../models/model_ubicacion_clima.js';

// Obtener todas las ubicaciones de climas
export const getUbicacionesClimas = async (req, res) => {
    try {
        const ubicacionesClimas = await UbicacionClima.findAll();
        res.json(ubicacionesClimas);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener una ubicacion de clima por ID
export const getUbicacionClima = async (req, res) => {
    try {
        const ubicacionClima = await UbicacionClima.findByPk(req.params.Id_ubicacion_Clima);
        res.json(ubicacionClima);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear una nueva ubicacion de clima
export const createUbicacionClima = async (req, res) => {
    try {
        await UbicacionClima.create(req.body);
        res.json({ message: 'Ubicación de clima creada correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar una ubicacion de clima
export const updateUbicacionClima = async (req, res) => {
    try {
        await UbicacionClima.update(req.body, {
            where: {
                Id_ubicacion_Clima: req.params.Id_ubicacion_Clima
            }
        });
        res.json({ message: 'Ubicación de clima actualizada correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar una ubicacion de clima
export const deleteUbicacionClima = async (req, res) => {
    try {
        await UbicacionClima.destroy({
            where: {
                Id_ubicacion_Clima: req.params.Id_ubicacion_Clima
            }
        });
        res.json({ message: 'Ubicación de clima eliminada correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};
