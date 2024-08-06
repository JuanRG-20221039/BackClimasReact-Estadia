import Dia from '../models/model_dias.js';

// Controlador para la tabla de días

// Obtener todos los días
export const getDias = async (req, res) => {
    try {
        const dias = await Dia.findAll();
        res.json(dias);
    } catch (error) {
        console.error('Error al obtener los días:', error);
        res.status(500).json({ message: 'Error al obtener los días' });
    }
};

// Crear un nuevo día
export const createDia = async (req, res) => {
    const { Dia } = req.body;
    try {
        const nuevoDia = await Dia.create({ Dia });
        res.status(201).json(nuevoDia);
    } catch (error) {
        console.error('Error al crear un nuevo día:', error);
        res.status(500).json({ message: 'Error al crear un nuevo día' });
    }
};

// Actualizar un día existente
export const updateDia = async (req, res) => {
    const id = req.params.id;
    const { Dia } = req.body;
    try {
        await Dia.update({ Dia }, { where: { Id_dias: id } });
        res.json({ message: 'Día actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar el día:', error);
        res.status(500).json({ message: 'Error al actualizar el día' });
    }
};

// Eliminar un día existente
export const deleteDia = async (req, res) => {
    const id = req.params.id;
    try {
        await Dia.destroy({ where: { Id_dias: id } });
        res.json({ message: 'Día eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar el día:', error);
        res.status(500).json({ message: 'Error al eliminar el día' });
    }
};

// Obtener un día por ID
export const getDiaById = async (req, res) => {
    const id = req.params.id;
    try {
        const dia = await Dia.findOne({ where: { Id_dias: id } });
        if (dia) {
            res.json(dia);
        } else {
            res.status(404).json({ message: 'Día no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el día:', error);
        res.status(500).json({ message: 'Error al obtener el día' });
    }
};
