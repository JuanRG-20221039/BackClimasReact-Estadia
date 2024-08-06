import Pregunta from '../models/model_preguntas.js';

export const getPreguntas = async (req, res) => {
    try {
        const preguntas = await Pregunta.findAll();
        res.json(preguntas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPreguntaById = async (req, res) => {
    try {
        const pregunta = await Pregunta.findByPk(req.params.id);
        if (pregunta) {
            res.json(pregunta);
        } else {
            res.status(404).json({ error: 'Pregunta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createPregunta = async (req, res) => {
    try {
        const nuevaPregunta = await Pregunta.create(req.body);
        res.status(201).json(nuevaPregunta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updatePregunta = async (req, res) => {
    try {
        const [updated] = await Pregunta.update(req.body, {
            where: { Id_pregunta: req.params.id }
        });
        if (updated) {
            const updatedPregunta = await Pregunta.findByPk(req.params.id);
            res.json(updatedPregunta);
        } else {
            res.status(404).json({ error: 'Pregunta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deletePregunta = async (req, res) => {
    try {
        const deleted = await Pregunta.destroy({
            where: { Id_pregunta: req.params.id }
        });
        if (deleted) {
            res.json({ message: 'Pregunta eliminada' });
        } else {
            res.status(404).json({ error: 'Pregunta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
