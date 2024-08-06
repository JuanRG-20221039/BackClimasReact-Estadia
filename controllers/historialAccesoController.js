import HistorialAcceso from '../models/model_historial_de_acceso.js';

// Controlador para el historial de acceso

export const getHistorialAcceso = async (req, res) => {
    try {
        const historial = await HistorialAcceso.findAll();
        res.json(historial);
    } catch (error) {
        console.error('Error al obtener el historial de acceso:', error);
        res.status(500).json({ message: 'Error al obtener el historial de acceso' });
    }
};

export const createRegistroAcceso = async (req, res) => {
    const { Id_clave_trabajador, Id_Clima, Accion_realizada, Fecha_Hora } = req.body;
    try {
        const nuevoRegistro = await HistorialAcceso.create({ Id_clave_trabajador, Id_Clima, Accion_realizada, Fecha_Hora });
        res.status(201).json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro de acceso:', error);
        res.status(500).json({ message: 'Error al crear un nuevo registro de acceso' });
    }
};

export const deleteRegistrosByIdClima = async (req, res) => {
    const { Id_Clima } = req.params;
    try {
        await HistorialAcceso.destroy({
            where: { Id_Clima }
        });
        res.status(200).json({ message: 'Registros eliminados exitosamente' });
    } catch (error) {
        console.error('Error al eliminar los registros:', error);
        res.status(500).json({ message: 'Error al eliminar los registros' });
    }
};
