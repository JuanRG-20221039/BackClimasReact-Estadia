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

// Obtener una hora por ID
export const getHoraByID = async (req, res) => {
    try {
        const hora = await Horas.findByPk(req.params.Id_horas);
        if (hora) {
            res.json(hora);
        } else {
            res.status(404).json({ message: 'Hora no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una hora por el campo Horas
export const getHoraPorHoras = async (req, res) => {
    const { horas } = req.params;
    try {
        const hora = await Horas.findOne({
            where: {
                Horas: horas
            }
        });
        if (!hora) {
            res.status(404).json({ message: 'Hora no encontrada' });
        } else {
            res.json(hora);
        }
    } catch (error) {
        console.error('Error al obtener la hora por el campo Horas:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
