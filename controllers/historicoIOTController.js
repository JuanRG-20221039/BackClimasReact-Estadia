import HistoricoIOT from '../models/model_historico_iot.js';

// Controlador para el historico de dispositivos IOT

export const getHistoricoIOT = async (req, res) => {
    try {
        const historico = await HistoricoIOT.findAll();
        res.json(historico);
    } catch (error) {
        console.error('Error al obtener el historico de dispositivos IOT:', error);
        res.status(500).json({ message: 'Error al obtener el historico de dispositivos IOT' });
    }
};

export const createRegistroHistoricoIOT = async (req, res) => {
    const { Id_iot, Presencia_personas, Humedad_value, Temperatura_value, Estado_clima, Fecha_hora } = req.body;
    try {
        const nuevoRegistro = await HistoricoIOT.create({ Id_iot, Presencia_personas, Humedad_value, Temperatura_value, Estado_clima, Fecha_hora });
        res.status(201).json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro en el historico de dispositivos IOT:', error);
        res.status(500).json({ message: 'Error al crear un nuevo registro en el historico de dispositivos IOT' });
    }
};
