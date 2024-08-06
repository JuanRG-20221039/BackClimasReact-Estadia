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
        // Crear un objeto con todos los valores en 0
        const newIoTDevice = {
            Alias_iot: req.body.Alias_iot,
            Mac_dispositivo: req.body.Mac_dispositivo,
            Presencia_personas: 0,
            Humedad_value: 0,
            Temperatura_value: 0,
            Estado_clima: 0
            // Agrega aquí cualquier otro campo que necesites inicializar en 0
        };

        // Crear el dispositivo IoT en la base de datos
        await IoT.create(newIoTDevice);

        res.json({ message: 'Dispositivo IoT creado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un dispositivo IoT
export const updateIoTDevice = async (req, res) => {
    try {
        const id = req.params.Id_iot;
        const { Mac_dispositivo, Alias_iot } = req.body;

        // Verificar si el dispositivo IoT existe
        const iotDevice = await IoT.findByPk(id);
        if (!iotDevice) {
            return res.status(404).json({ message: 'Dispositivo IoT no encontrado' });
        }

        // Solo actualiza los campos que están presentes en el cuerpo de la solicitud
        const updatedFields = {};
        if (Mac_dispositivo !== undefined) updatedFields.Mac_dispositivo = Mac_dispositivo;
        if (Alias_iot !== undefined) updatedFields.Alias_iot = Alias_iot;

        // Actualizar el dispositivo IoT
        await iotDevice.update(updatedFields);

        res.json({ message: 'Dispositivo IoT actualizado correctamente', device: iotDevice });
    } catch (error) {
        console.error('Error updating IoT device:', error);
        res.status(500).json({ message: 'Error al intentar actualizar el dispositivo IoT' });
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

// Obtener un dispositivo IoT por su MAC
export const getIoTDeviceByMac = async (req, res) => {
    const { mac } = req.params;
    try {
        const iotDevice = await IoT.findOne({ where: { Mac_dispositivo: mac } });
        if (iotDevice) {
            res.json(iotDevice);
        } else {
            res.status(404).json({ message: 'Dispositivo IoT no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener la MAC de un dispositivo IoT por su ID
export const getIoTDeviceMacById = async (req, res) => {
    try {
        const iotDevice = await IoT.findByPk(req.params.Id_iot, {
            attributes: ['Mac_dispositivo']
        });
        if (iotDevice) {
            res.json(iotDevice);
        } else {
            res.status(404).json({ message: 'Dispositivo IoT no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener la MAC de un dispositivo IoT por su ID
export const getIoTDeviceAliasById = async (req, res) => {
    try {
        const iotDevice = await IoT.findByPk(req.params.Id_iot, {
            attributes: ['Alias_iot']
        });
        if (iotDevice) {
            res.json(iotDevice);
        } else {
            res.status(404).json({ message: 'Dispositivo IoT no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};