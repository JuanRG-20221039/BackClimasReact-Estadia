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

// Obtener todas las ubicaciones de climas asociadas a un aula específica
export const getUbicacionesClimasPorAula = async (req, res) => {
    const { idAula } = req.params;
    try {
        const ubicacionesClimas = await UbicacionClima.findAll({ where: { Id_aula: idAula } });
        if (ubicacionesClimas.length === 0) {
            res.status(404).json({ message: 'No se encontraron ubicaciones de clima para el aula especificada' });
        } else {
            res.json(ubicacionesClimas);
        }
    } catch (error) {
        console.error('Error al obtener las ubicaciones de climas por aula:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Función para obtener una ubicación de clima por ID de clima
export const getUbicacionClimaPorIdClima = async (req, res) => {
    const { idClima } = req.params;
    try {
        const ubicacionClima = await UbicacionClima.findOne({ where: { Id_clima: idClima } });
        if (!ubicacionClima) {
            res.status(404).json({ message: 'No se encontró ninguna ubicación de clima para el ID de clima especificado' });
        } else {
            res.json(ubicacionClima);
        }
    } catch (error) {
        console.error('Error al obtener la ubicación de clima por ID de clima:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};