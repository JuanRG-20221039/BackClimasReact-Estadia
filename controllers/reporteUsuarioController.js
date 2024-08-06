import ReporteUsuario from '../models/model_reporte_usuario.js';

// Obtener todos los reportes de usuario
export const getReportesUsuario = async (req, res) => {
    try {
        const reportes = await ReporteUsuario.findAll();
        res.json(reportes);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener un reporte de usuario por ID
export const getReporteUsuario = async (req, res) => {
    try {
        const reporte = await ReporteUsuario.findByPk(req.params.Id_reporte_usuario);
        res.json(reporte);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un nuevo reporte de usuario
export const createReporteUsuario = async (req, res) => {
    try {
        await ReporteUsuario.create(req.body);
        res.json({ message: 'Reporte de usuario creado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un reporte de usuario
export const updateReporteUsuario = async (req, res) => {
    try {
        await ReporteUsuario.update(req.body, {
            where: {
                Id_reporte_usuario: req.params.Id_reporte_usuario
            }
        });
        res.json({ message: 'Reporte de usuario actualizado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar un reporte de usuario
export const deleteReporteUsuario = async (req, res) => {
    try {
        await ReporteUsuario.destroy({
            where: {
                Id_reporte_usuario: req.params.Id_reporte_usuario
            }
        });
        res.json({ message: 'Reporte de usuario eliminado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener todos los reportes de usuario asociados a un aula específica
export const getReportesPorAula = async (req, res) => {
    const { idAula } = req.params;
    try {
        const reportes = await ReporteUsuario.findAll({ where: { Id_aula: idAula } });
        if (reportes.length === 0) {
            res.status(404).json({ message: 'No se encontraron reportes para el aula especificada' });
        } else {
            res.json(reportes);
        }
    } catch (error) {
        console.error('Error al obtener los reportes por aula:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Eliminar reportes de usuario por Id_aula
export const deleteReportesPorAula = async (req, res) => {
    const { idAula } = req.params;
    try {
        const deletedCount = await ReporteUsuario.destroy({
            where: { Id_aula: idAula }
        });
        if (deletedCount === 0) {
            res.status(404).json({ message: 'No se encontraron reportes para eliminar con el Id_aula especificado' });
        } else {
            res.json({ message: 'Reportes eliminados correctamente' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
