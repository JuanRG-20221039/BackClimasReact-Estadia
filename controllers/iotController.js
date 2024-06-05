import IoT from '../models/model_iot.js';

// Obtener todos los dispositivos IoT
export const getIoTDevices = async (req, res) => {
    try {
        const iotDevices = await IoT.findAll();
        res.json(iotDevices);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener un dispositivo IoT por ID
export const getIoTDevice = async (req, res) => {
    try {
        const iotDevice = await IoT.findByPk(req.params.Id_iot);
        res.json(iotDevice);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un nuevo dispositivo IoT
export const createIoTDevice = async (req, res) => {
    try {
        await IoT.create(req.body);
        res.json({ message: 'Dispositivo IoT creado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un dispositivo IoT
export const updateIoTDevice = async (req, res) => {
    try {
        await IoT.update(req.body, {
            where: {
                Id_iot: req.params.Id_iot
            }
        });
        res.json({ message: 'Dispositivo IoT actualizado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar un dispositivo IoT
export const deleteIoTDevice = async (req, res) => {
    try {
        await IoT.destroy({
            where: {
                Id_iot: req.params.Id_iot
            }
        });
        res.json({ message: 'Dispositivo IoT eliminado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};
