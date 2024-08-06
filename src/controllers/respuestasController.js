import Respuesta from '../models/model_respuestas.js';

export const getRespuestas = async (req, res) => {
    try {
        const respuestas = await Respuesta.findAll();
        res.json(respuestas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getRespuestaById = async (req, res) => {
    try {
        const respuesta = await Respuesta.findByPk(req.params.id);
        if (respuesta) {
            res.json(respuesta);
        } else {
            res.status(404).json({ error: 'Respuesta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createRespuesta = async (req, res) => {
    try {
        const nuevaRespuesta = await Respuesta.create(req.body);
        res.status(201).json(nuevaRespuesta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateRespuesta = async (req, res) => {
    try {
        const [updated] = await Respuesta.update(req.body, {
            where: { Id_respuesta: req.params.id }
        });
        if (updated) {
            const updatedRespuesta = await Respuesta.findByPk(req.params.id);
            res.json(updatedRespuesta);
        } else {
            res.status(404).json({ error: 'Respuesta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteRespuesta = async (req, res) => {
    try {
        const deleted = await Respuesta.destroy({
            where: { Id_respuesta: req.params.id }
        });
        if (deleted) {
            res.json({ message: 'Respuesta eliminada' });
        } else {
            res.status(404).json({ error: 'Respuesta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getRespuestasByTrabajadorId = async (req, res) => {
    try {
        const respuestas = await Respuesta.findAll({
            where: { Id_clave_trabajador: req.params.id_clave_trabajador }
        });
        res.json(respuestas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
