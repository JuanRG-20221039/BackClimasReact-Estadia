import DispositivosMacModel from '../models/DispositivosMacModel.js';

// Crear un nuevo dispositivo MAC
export const createDispositivoMac = async (req, res) => {
    const { vch_mac_dispositivo, vch_nombre_dispositivo, clv_aula, clv_edificio, date_fecha } = req.body;
    try {
        const nuevoDispositivoMac = await DispositivosMacModel.create({ 
            vch_mac_dispositivo, 
            vch_nombre_dispositivo, 
            clv_aula, 
            clv_edificio, 
            date_fecha 
        });
        res.status(201).json(nuevoDispositivoMac);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el dispositivo MAC' });
    }
};

// Obtener todos los dispositivos MAC
export const getDispositivosMac = async (req, res) => {
    try {
        const dispositivosMac = await DispositivosMacModel.findAll();
        res.json(dispositivosMac);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los dispositivos MAC' });
    }
};

// Obtener un dispositivo MAC por su ID
export const getDispositivoMacById = async (req, res) => {
    const { id } = req.params;
    try {
        const dispositivoMac = await DispositivosMacModel.findByPk(id);
        if (dispositivoMac) {
            res.json(dispositivoMac);
        } else {
            res.status(404).json({ error: 'Dispositivo MAC no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el dispositivo MAC' });
    }
};

// Actualizar un dispositivo MAC
export const updateDispositivoMac = async (req, res) => {
    const { id } = req.params;
    const { vch_mac_dispositivo, vch_nombre_dispositivo, clv_aula, clv_edificio, date_fecha } = req.body;
    try {
        const dispositivoMac = await DispositivosMacModel.findByPk(id);
        if (dispositivoMac) {
            dispositivoMac.vch_mac_dispositivo = vch_mac_dispositivo;
            dispositivoMac.vch_nombre_dispositivo = vch_nombre_dispositivo;
            dispositivoMac.clv_aula = clv_aula;
            dispositivoMac.clv_edificio = clv_edificio;
            dispositivoMac.date_fecha = date_fecha;
            await dispositivoMac.save();
            res.json(dispositivoMac);
        } else {
            res.status(404).json({ error: 'Dispositivo MAC no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el dispositivo MAC' });
    }
};

// Eliminar un dispositivo MAC
export const deleteDispositivoMac = async (req, res) => {
    const { id } = req.params;
    try {
        const dispositivoMac = await DispositivosMacModel.findByPk(id);
        if (dispositivoMac) {
            await dispositivoMac.destroy();
            res.json({ message: 'Dispositivo MAC eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Dispositivo MAC no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el dispositivo MAC' });
    }
};