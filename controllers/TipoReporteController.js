import TipoDeReporteModel from '../models/TipoReporteModel.js';

// Crear un nuevo tipo de reporte
export const createTipoReporte = async (req, res) => {
    const { vch_tipo_reporte } = req.body;
    try {
        const nuevoTipoReporte = await TipoDeReporteModel.create({ vch_tipo_reporte });
        res.status(201).json(nuevoTipoReporte);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el tipo de reporte' });
    }
};

// Obtener todos los tipos de reporte
export const getTiposReporte = async (req, res) => {
    try {
        const tiposReporte = await TipoDeReporteModel.findAll();
        res.json(tiposReporte);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los tipos de reporte' });
    }
};

// Obtener un tipo de reporte por su ID
export const getTipoReporteById = async (req, res) => {
    const { id } = req.params;
    try {
        const tipoReporte = await TipoDeReporteModel.findByPk(id);
        if (tipoReporte) {
            res.json(tipoReporte);
        } else {
            res.status(404).json({ error: 'Tipo de reporte no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el tipo de reporte' });
    }
};

// Actualizar un tipo de reporte
export const updateTipoReporte = async (req, res) => {
    const { id } = req.params;
    const { vch_tipo_reporte } = req.body;
    try {
        const tipoReporte = await TipoDeReporteModel.findByPk(id);
        if (tipoReporte) {
            tipoReporte.vch_tipo_reporte = vch_tipo_reporte;
            await tipoReporte.save();
            res.json(tipoReporte);
        } else {
            res.status(404).json({ error: 'Tipo de reporte no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el tipo de reporte' });
    }
};

// Eliminar un tipo de reporte
export const deleteTipoReporte = async (req, res) => {
    const { id } = req.params;
    try {
        const tipoReporte = await TipoDeReporteModel.findByPk(id);
        if (tipoReporte) {
            await tipoReporte.destroy();
            res.json({ message: 'Tipo de reporte eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Tipo de reporte no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el tipo de reporte' });
    }
};
