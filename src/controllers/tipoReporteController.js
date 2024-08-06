import TipoReporte from '../models/model_tipo_reporte.js';

// Obtener todos los tipos de reporte
export const getTiposReporte = async (req, res) => {
    try {
        const tipos = await TipoReporte.findAll();
        res.json(tipos);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener un tipo de reporte por ID
export const getTipoReporte = async (req, res) => {
    try {
        const tipo = await TipoReporte.findByPk(req.params.Id_tipo_reporte);
        res.json(tipo);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un nuevo tipo de reporte
export const createTipoReporte = async (req, res) => {
    try {
        await TipoReporte.create(req.body);
        res.json({ message: 'Tipo de reporte creado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un tipo de reporte
export const updateTipoReporte = async (req, res) => {
    try {
        await TipoReporte.update(req.body, {
            where: {
                Id_tipo_reporte: req.params.Id_tipo_reporte
            }
        });
        res.json({ message: 'Tipo de reporte actualizado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar un tipo de reporte
export const deleteTipoReporte = async (req, res) => {
    try {
        await TipoReporte.destroy({
            where: {
                Id_tipo_reporte: req.params.Id_tipo_reporte
            }
        });
        res.json({ message: 'Tipo de reporte eliminado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};
