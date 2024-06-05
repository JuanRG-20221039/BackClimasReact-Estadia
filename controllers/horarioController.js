import Horario from '../models/model_horario.js';

// Obtener todos los horarios
export const getHorarios = async (req, res) => {
    try {
        const horarios = await Horario.findAll();
        res.json(horarios);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener un horario por ID
export const getHorario = async (req, res) => {
    try {
        const horario = await Horario.findByPk(req.params.Id_horario);
        res.json(horario);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un nuevo horario
export const createHorario = async (req, res) => {
    try {
        await Horario.create(req.body);
        res.json({ message: 'Horario creado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un horario
export const updateHorario = async (req, res) => {
    try {
        await Horario.update(req.body, {
            where: {
                Id_horario: req.params.Id_horario
            }
        });
        res.json({ message: 'Horario actualizado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar un horario
export const deleteHorario = async (req, res) => {
    try {
        await Horario.destroy({
            where: {
                Id_horario: req.params.Id_horario
            }
        });
        res.json({ message: 'Horario eliminado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};