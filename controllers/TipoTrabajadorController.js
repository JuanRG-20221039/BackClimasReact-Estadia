import TipoDeTrabajadorModel from '../models/TipoTrabajadorModel.js';

// Crear un nuevo tipo de trabajador
export const createTipoDeTrabajador = async (req, res) => {
    const { vch_rol, vch_puesto } = req.body;
    try {
        const nuevoTipoDeTrabajador = await TipoDeTrabajadorModel.create({ vch_rol, vch_puesto });
        res.status(201).json(nuevoTipoDeTrabajador);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el tipo de trabajador' });
    }
};

// Obtener todos los tipos de trabajador
export const getTiposDeTrabajador = async (req, res) => {
    try {
        const tiposDeTrabajador = await TipoDeTrabajadorModel.findAll();
        res.json(tiposDeTrabajador);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los tipos de trabajador' });
    }
};

// Obtener un tipo de trabajador por su ID
export const getTipoDeTrabajadorById = async (req, res) => {
    const { id } = req.params;
    try {
        const tipoDeTrabajador = await TipoDeTrabajadorModel.findByPk(id);
        if (tipoDeTrabajador) {
            res.json(tipoDeTrabajador);
        } else {
            res.status(404).json({ error: 'Tipo de trabajador no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el tipo de trabajador' });
    }
};

// Actualizar un tipo de trabajador
export const updateTipoDeTrabajador = async (req, res) => {
    const { id } = req.params;
    const { vch_rol, vch_puesto } = req.body;
    try {
        const tipoDeTrabajador = await TipoDeTrabajadorModel.findByPk(id);
        if (tipoDeTrabajador) {
            tipoDeTrabajador.vch_rol = vch_rol;
            tipoDeTrabajador.vch_puesto = vch_puesto;
            await tipoDeTrabajador.save();
            res.json(tipoDeTrabajador);
        } else {
            res.status(404).json({ error: 'Tipo de trabajador no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el tipo de trabajador' });
    }
};

// Eliminar un tipo de trabajador
export const deleteTipoDeTrabajador = async (req, res) => {
    const { id } = req.params;
    try {
        const tipoDeTrabajador = await TipoDeTrabajadorModel.findByPk(id);
        if (tipoDeTrabajador) {
            await tipoDeTrabajador.destroy();
            res.json({ message: 'Tipo de trabajador eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Tipo de trabajador no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el tipo de trabajador' });
    }
};
