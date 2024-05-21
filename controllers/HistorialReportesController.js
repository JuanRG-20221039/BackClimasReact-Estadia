import HistorialDeReportesModel from '../models/HistorialReportesModel.js';

// Crear un nuevo registro en el historial de reportes
export const createHistorialReporte = async (req, res) => {
    const { clv_reporte, vch_estado, date_fecha, vch_descripcion, clv_trabajador } = req.body;
    try {
        const nuevoHistorialReporte = await HistorialDeReportesModel.create({ 
            clv_reporte, 
            vch_estado, 
            date_fecha, 
            vch_descripcion, 
            clv_trabajador 
        });
        res.status(201).json(nuevoHistorialReporte);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el registro en el historial de reportes' });
    }
};

// Obtener todos los registros del historial de reportes
export const getHistorialReportes = async (req, res) => {
    try {
        const historialReportes = await HistorialDeReportesModel.findAll();
        res.json(historialReportes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los registros del historial de reportes' });
    }
};

// Obtener un registro del historial de reportes por su ID
export const getHistorialReporteById = async (req, res) => {
    const { id } = req.params;
    try {
        const historialReporte = await HistorialDeReportesModel.findByPk(id);
        if (historialReporte) {
            res.json(historialReporte);
        } else {
            res.status(404).json({ error: 'Registro del historial de reportes no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el registro del historial de reportes' });
    }
};

// Actualizar un registro del historial de reportes
export const updateHistorialReporte = async (req, res) => {
    const { id } = req.params;
    const { clv_reporte, vch_estado, date_fecha, vch_descripcion, clv_trabajador } = req.body;
    try {
        const historialReporte = await HistorialDeReportesModel.findByPk(id);
        if (historialReporte) {
            historialReporte.clv_reporte = clv_reporte;
            historialReporte.vch_estado = vch_estado;
            historialReporte.date_fecha = date_fecha;
            historialReporte.vch_descripcion = vch_descripcion;
            historialReporte.clv_trabajador = clv_trabajador;
            await historialReporte.save();
            res.json(historialReporte);
        } else {
            res.status(404).json({ error: 'Registro del historial de reportes no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el registro del historial de reportes' });
    }
};

// Eliminar un registro del historial de reportes
export const deleteHistorialReporte = async (req, res) => {
    const { id } = req.params;
    try {
        const historialReporte = await HistorialDeReportesModel.findByPk(id);
        if (historialReporte) {
            await historialReporte.destroy();
            res.json({ message: 'Registro del historial de reportes eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Registro del historial de reportes no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el registro del historial de reportes' });
    }
};