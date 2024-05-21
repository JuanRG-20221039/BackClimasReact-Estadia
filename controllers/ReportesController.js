import ReportesModel from '../models/ReportesModel.js';

// Crear un nuevo reporte
export const createReporte = async (req, res) => {
    const { clv_edificio, clv_aula, clv_trabajador, date_fecha, time_hora, vch_descripcion, clv_tipo_reporte } = req.body;
    try {
        const nuevoReporte = await ReportesModel.create({ 
            clv_edificio, 
            clv_aula, 
            clv_trabajador, 
            date_fecha, 
            time_hora, 
            vch_descripcion, 
            clv_tipo_reporte 
        });
        res.status(201).json(nuevoReporte);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el reporte' });
    }
};

// Obtener todos los reportes
export const getReportes = async (req, res) => {
    try {
        const reportes = await ReportesModel.findAll();
        res.json(reportes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los reportes' });
    }
};

// Obtener un reporte por su ID
export const getReporteById = async (req, res) => {
    const { id } = req.params;
    try {
        const reporte = await ReportesModel.findByPk(id);
        if (reporte) {
            res.json(reporte);
        } else {
            res.status(404).json({ error: 'Reporte no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el reporte' });
    }
};

// Actualizar un reporte
export const updateReporte = async (req, res) => {
    const { id } = req.params;
    const { clv_edificio, clv_aula, clv_trabajador, date_fecha, time_hora, vch_descripcion, clv_tipo_reporte } = req.body;
    try {
        const reporte = await ReportesModel.findByPk(id);
        if (reporte) {
            reporte.clv_edificio = clv_edificio;
            reporte.clv_aula = clv_aula;
            reporte.clv_trabajador = clv_trabajador;
            reporte.date_fecha = date_fecha;
            reporte.time_hora = time_hora;
            reporte.vch_descripcion = vch_descripcion;
            reporte.clv_tipo_reporte = clv_tipo_reporte;
            await reporte.save();
            res.json(reporte);
        } else {
            res.status(404).json({ error: 'Reporte no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el reporte' });
    }
};

// Eliminar un reporte
export const deleteReporte = async (req, res) => {
    const { id } = req.params;
    try {
        const reporte = await ReportesModel.findByPk(id);
        if (reporte) {
            await reporte.destroy();
            res.json({ message: 'Reporte eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Reporte no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el reporte' });
    }
};
