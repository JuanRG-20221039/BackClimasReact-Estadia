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
