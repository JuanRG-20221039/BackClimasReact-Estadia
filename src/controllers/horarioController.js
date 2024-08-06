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

// Obtener todos los horarios de un Id_aula específico
export const getHorariosPorAula = async (req, res) => {
    const { idAula } = req.params;
    try {
        const horarios = await Horario.findAll({ where: { Id_aula: idAula } });
        if (horarios.length === 0) {
            res.status(404).json({ message: 'No se encontraron horarios para el aula especificada' });
        } else {
            res.json(horarios);
        }
    } catch (error) {
        console.error('Error al obtener los horarios por aula:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener un horario por Id_aula, Id_Horas e Id_Dia
export const getHorarioPorAulaYHorasYDia = async (req, res) => {
    const { idAula, idHoras, idDia } = req.params;
    try {
        const horario = await Horario.findOne({
            where: {
                Id_aula: idAula,
                Id_Horas: idHoras,
                Id_Dia: idDia
            }
        });
        if (!horario) {
            res.status(404).json({ message: 'No se encontró el horario con los parámetros proporcionados' });
        } else {
            res.json(horario);
        }
    } catch (error) {
        console.error('Error al obtener el horario por aula, horas y día:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Eliminar horarios por Id_aula
export const deleteHorariosPorAula = async (req, res) => {
    const { idAula } = req.params;
    try {
        const deletedCount = await Horario.destroy({
            where: { Id_aula: idAula }
        });
        if (deletedCount === 0) {
            res.status(404).json({ message: 'No se encontraron horarios para eliminar con el Id_aula especificado' });
        } else {
            res.json({ message: 'Horarios eliminados correctamente' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
