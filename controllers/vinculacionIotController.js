// controllers/vinculacionIotController.js
import VinculacionIot from '../models/model_vinculacion_iot.js';

// Obtener todas las vinculaciones
export const getVinculacionesIot = async (req, res) => {
    try {
        const vinculaciones = await VinculacionIot.findAll();
        res.json(vinculaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una vinculacion por ID
export const getVinculacionIot = async (req, res) => {
    try {
        const vinculacion = await VinculacionIot.findByPk(req.params.Id_vinculacion);
        if (vinculacion) {
            res.json(vinculacion);
        } else {
            res.status(404).json({ message: 'Vinculacion no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva vinculacion
export const createVinculacionIot = async (req, res) => {
    try {
        const nuevaVinculacion = await VinculacionIot.create(req.body);
        res.status(201).json(nuevaVinculacion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una vinculacion
export const updateVinculacionIot = async (req, res) => {
    try {
        const [updated] = await VinculacionIot.update(req.body, {
            where: { Id_vinculacion: req.params.Id_vinculacion }
        });
        if (updated) {
            const updatedVinculacion = await VinculacionIot.findByPk(req.params.Id_vinculacion);
            res.json(updatedVinculacion);
        } else {
            res.status(404).json({ message: 'Vinculacion no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una vinculacion
export const deleteVinculacionIot = async (req, res) => {
    try {
        const deleted = await VinculacionIot.destroy({
            where: { Id_vinculacion: req.params.Id_vinculacion }
        });
        if (deleted) {
            res.json({ message: 'Vinculacion eliminada correctamente' });
        } else {
            res.status(404).json({ message: 'Vinculacion no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
