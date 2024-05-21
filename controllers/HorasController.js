import HorasModel from '../models/HorasModel.js';

// Crear una nueva hora
export const createHora = async (req, res) => {
    const { time_inicio, time_final, vch_turno } = req.body;
    try {
        const nuevaHora = await HorasModel.create({ 
            time_inicio, 
            time_final, 
            vch_turno 
        });
        res.status(201).json(nuevaHora);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la hora' });
    }
};

// Obtener todas las horas
export const getHoras = async (req, res) => {
    try {
        const horas = await HorasModel.findAll();
        res.json(horas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las horas' });
    }
};

// Obtener una hora por su clave
export const getHoraById = async (req, res) => {
    const { id } = req.params;
    try {
        const hora = await HorasModel.findByPk(id);
        if (hora) {
            res.json(hora);
        } else {
            res.status(404).json({ error: 'Hora no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la hora' });
    }
};

// Actualizar una hora
export const updateHora = async (req, res) => {
    const { id } = req.params;
    const { time_inicio, time_final, vch_turno } = req.body;
    try {
        const hora = await HorasModel.findByPk(id);
        if (hora) {
            hora.time_inicio = time_inicio;
            hora.time_final = time_final;
            hora.vch_turno = vch_turno;
            await hora.save();
            res.json(hora);
        } else {
            res.status(404).json({ error: 'Hora no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la hora' });
    }
};

// Eliminar una hora
export const deleteHora = async (req, res) => {
    const { id } = req.params;
    try {
        const hora = await HorasModel.findByPk(id);
        if (hora) {
            await hora.destroy();
            res.json({ message: 'Hora eliminada exitosamente' });
        } else {
            res.status(404).json({ error: 'Hora no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la hora' });
    }
};
