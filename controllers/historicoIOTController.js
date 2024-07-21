import HistoricoIOT from '../models/model_historico_iot.js';

// Controlador para el historico de dispositivos IOT

// Obtener todo el historial
export const getHistoricoIOT = async (req, res) => {
    try {
        const historico = await HistoricoIOT.findAll();
        res.json(historico);
    } catch (error) {
        console.error('Error al obtener el historico de dispositivos IOT:', error);
        res.status(500).json({ message: 'Error al obtener el historico de dispositivos IOT' });
    }
};

// Crear un registro en el historial
export const createRegistroHistoricoIOT = async (req, res) => {
    const { Id_vinculacion_iot, Presencia_personas, Humedad_value, Temperatura_value, Estado_clima } = req.body;
    try {
        const nuevoRegistro = await HistoricoIOT.create({ Id_vinculacion_iot, Presencia_personas, Humedad_value, Temperatura_value, Estado_clima });
        res.status(201).json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro en el historico de dispositivos IOT:', error);
        res.status(500).json({ message: 'Error al crear un nuevo registro en el historico de dispositivos IOT' });
    }
};

// Eliminar registros por Id_vinculacion_iot específico
export const deleteRegistrosByVinculacionId = async (req, res) => {
    const { id } = req.params; // Id_vinculacion_iot a eliminar
    
    try {
        const deletedCount = await HistoricoIOT.destroy({
            where: {
                Id_vinculacion_iot: id
            }
        });

        res.json({ message: `Se eliminaron ${deletedCount} registros correctamente.` });
    } catch (error) {
        console.error('Error al eliminar registros por Id_vinculacion_iot:', error);
        res.status(500).json({ message: 'Error al eliminar registros por Id_vinculacion_iot' });
    }
};
