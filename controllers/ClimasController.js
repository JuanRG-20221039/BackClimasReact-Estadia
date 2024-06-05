import Clima from '../models/model_aulas.js';

// Función para obtener todos los registros de climas
export const getClimas = async (req, res) => {
    try {
        const climas = await Clima.findAll();
        res.json(climas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Función para obtener un registro de clima por su ID
export const getClimaById = async (req, res) => {
    const { id } = req.params;
    try {
        const clima = await Clima.findByPk(id);
        if (!clima) {
            return res.status(404).json({ message: 'Clima no encontrado' });
        }
        res.json(clima);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Función para crear un nuevo registro de clima
export const createClima = async (req, res) => {
    const newClima = req.body;
    try {
        const clima = await Clima.create(newClima);
        res.status(201).json(clima);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Función para actualizar un registro de clima por su ID
export const updateClima = async (req, res) => {
    const { id } = req.params;
    const updatedClima = req.body;
    try {
        const clima = await Clima.findByPk(id);
        if (!clima) {
            return res.status(404).json({ message: 'Clima no encontrado' });
        }
        await clima.update(updatedClima);
        res.json(clima);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Función para eliminar un registro de clima por su ID
export const deleteClima = async (req, res) => {
    const { id } = req.params;
    try {
        const clima = await Clima.findByPk(id);
        if (!clima) {
            return res.status(404).json({ message: 'Clima no encontrado' });
        }
        await clima.destroy();
        res.json({ message: 'Clima eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
