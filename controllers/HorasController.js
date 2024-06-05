import Horas from '../models/model_horas.js';

// Obtener todas las horas
export const getHoras = async (req, res) => {
    try {
        const horas = await Horas.findAll();
        res.json(horas);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener una hora por ID
export const getHora = async (req, res) => {
    try {
        const hora = await Horas.findByPk(req.params.Id_horas);
        res.json(hora);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear una nueva hora
export const createHora = async (req, res) => {
    try {
        await Horas.create(req.body);
        res.json({ message: 'Hora creada correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar una hora
export const updateHora = async (req, res) => {
    try {
        await Horas.update(req.body, {
            where: {
                Id_horas: req.params.Id_horas
            }
        });
        res.json({ message: 'Hora actualizada correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar una hora
export const deleteHora = async (req, res) => {
    try {
        await Horas.destroy({
            where: {
                Id_horas: req.params.Id_horas
            }
        });
        res.json({ message: 'Hora eliminada correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};
