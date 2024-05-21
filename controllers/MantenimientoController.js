import MantenimientoModel from '../models/MantenimientoModel.js';

// Crear un nuevo registro de mantenimiento
export const createMantenimiento = async (req, res) => {
    const { clv_tipo_mantenimiento, clv_aula, clv_trabajador, date_fecha, vch_observacion } = req.body;
    try {
        const nuevoMantenimiento = await MantenimientoModel.create({ 
            clv_tipo_mantenimiento, 
            clv_aula, 
            clv_trabajador, 
            date_fecha, 
            vch_observacion 
        });
        res.status(201).json(nuevoMantenimiento);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el registro de mantenimiento' });
    }
};

// Obtener todos los registros de mantenimiento
export const getMantenimientos = async (req, res) => {
    try {
        const mantenimientos = await MantenimientoModel.findAll();
        res.json(mantenimientos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los registros de mantenimiento' });
    }
};

// Obtener un registro de mantenimiento por su ID
export const getMantenimientoById = async (req, res) => {
    const { id } = req.params;
    try {
        const mantenimiento = await MantenimientoModel.findByPk(id);
        if (mantenimiento) {
            res.json(mantenimiento);
        } else {
            res.status(404).json({ error: 'Registro de mantenimiento no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el registro de mantenimiento' });
    }
};

// Actualizar un registro de mantenimiento
export const updateMantenimiento = async (req, res) => {
    const { id } = req.params;
    const { clv_tipo_mantenimiento, clv_aula, clv_trabajador, date_fecha, vch_observacion } = req.body;
    try {
        const mantenimiento = await MantenimientoModel.findByPk(id);
        if (mantenimiento) {
            mantenimiento.clv_tipo_mantenimiento = clv_tipo_mantenimiento;
            mantenimiento.clv_aula = clv_aula;
            mantenimiento.clv_trabajador = clv_trabajador;
            mantenimiento.date_fecha = date_fecha;
            mantenimiento.vch_observacion = vch_observacion;
            await mantenimiento.save();
            res.json(mantenimiento);
        } else {
            res.status(404).json({ error: 'Registro de mantenimiento no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el registro de mantenimiento' });
    }
};

// Eliminar un registro de mantenimiento
export const deleteMantenimiento = async (req, res) => {
    const { id } = req.params;
    try {
        const mantenimiento = await MantenimientoModel.findByPk(id);
        if (mantenimiento) {
            await mantenimiento.destroy();
            res.json({ message: 'Registro de mantenimiento eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Registro de mantenimiento no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el registro de mantenimiento' });
    }
};
