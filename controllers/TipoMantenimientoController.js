import TipoMantenimientoModel from '../models/TipoMantenimientoModel.js';

// Crear un nuevo tipo de mantenimiento
export const createTipoMantenimiento = async (req, res) => {
    const { vch_tipo } = req.body;
    try {
        const nuevoTipoMantenimiento = await TipoMantenimientoModel.create({ vch_tipo });
        res.status(201).json(nuevoTipoMantenimiento);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el tipo de mantenimiento' });
    }
};

// Obtener todos los tipos de mantenimiento
export const getTiposMantenimiento = async (req, res) => {
    try {
        const tiposMantenimiento = await TipoMantenimientoModel.findAll();
        res.json(tiposMantenimiento);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los tipos de mantenimiento' });
    }
};

// Obtener un tipo de mantenimiento por su ID
export const getTipoMantenimientoById = async (req, res) => {
    const { id } = req.params;
    try {
        const tipoMantenimiento = await TipoMantenimientoModel.findByPk(id);
        if (tipoMantenimiento) {
            res.json(tipoMantenimiento);
        } else {
            res.status(404).json({ error: 'Tipo de mantenimiento no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el tipo de mantenimiento' });
    }
};

// Actualizar un tipo de mantenimiento
export const updateTipoMantenimiento = async (req, res) => {
    const { id } = req.params;
    const { vch_tipo } = req.body;
    try {
        const tipoMantenimiento = await TipoMantenimientoModel.findByPk(id);
        if (tipoMantenimiento) {
            tipoMantenimiento.vch_tipo = vch_tipo;
            await tipoMantenimiento.save();
            res.json(tipoMantenimiento);
        } else {
            res.status(404).json({ error: 'Tipo de mantenimiento no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el tipo de mantenimiento' });
    }
};

// Eliminar un tipo de mantenimiento
export const deleteTipoMantenimiento = async (req, res) => {
    const { id } = req.params;
    try {
        const tipoMantenimiento = await TipoMantenimientoModel.findByPk(id);
        if (tipoMantenimiento) {
            await tipoMantenimiento.destroy();
            res.json({ message: 'Tipo de mantenimiento eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Tipo de mantenimiento no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el tipo de mantenimiento' });
    }
};
