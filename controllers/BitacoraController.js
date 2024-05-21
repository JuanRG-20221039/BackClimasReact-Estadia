import BitacoraModel from '../models/BitacoraModel.js';

// Crear un registro en la bitácora
export const createBitacora = async (req, res) => {
    const { clv_nombre_trabajador, vch_datosviejos, vch_datosnuevos, vch_operacion, tabla, date_timefecha } = req.body;
    try {
        const nuevaEntrada = await BitacoraModel.create({ 
            clv_nombre_trabajador, 
            vch_datosviejos, 
            vch_datosnuevos, 
            vch_operacion, 
            tabla, 
            date_timefecha 
        });
        res.status(201).json(nuevaEntrada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la entrada en la bitácora' });
    }
};

// Obtener todas las entradas de la bitácora
export const getBitacora = async (req, res) => {
    try {
        const entradas = await BitacoraModel.findAll();
        res.json(entradas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las entradas de la bitácora' });
    }
};

// Obtener una entrada de la bitácora por su clave
export const getBitacoraById = async (req, res) => {
    const { id } = req.params;
    try {
        const entrada = await BitacoraModel.findByPk(id);
        if (entrada) {
            res.json(entrada);
        } else {
            res.status(404).json({ error: 'Entrada de bitácora no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la entrada de la bitácora' });
    }
};

// Actualizar una entrada de la bitácora
export const updateBitacora = async (req, res) => {
    const { id } = req.params;
    const { clv_nombre_trabajador, vch_datosviejos, vch_datosnuevos, vch_operacion, tabla, date_timefecha } = req.body;
    try {
        const entrada = await BitacoraModel.findByPk(id);
        if (entrada) {
            entrada.clv_nombre_trabajador = clv_nombre_trabajador;
            entrada.vch_datosviejos = vch_datosviejos;
            entrada.vch_datosnuevos = vch_datosnuevos;
            entrada.vch_operacion = vch_operacion;
            entrada.tabla = tabla;
            entrada.date_timefecha = date_timefecha;
            await entrada.save();
            res.json(entrada);
        } else {
            res.status(404).json({ error: 'Entrada de bitácora no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la entrada de la bitácora' });
    }
};

// Eliminar una entrada de la bitácora
export const deleteBitacora = async (req, res) => {
    const { id } = req.params;
    try {
        const entrada = await BitacoraModel.findByPk(id);
        if (entrada) {
            await entrada.destroy();
            res.json({ message: 'Entrada de bitácora eliminada exitosamente' });
        } else {
            res.status(404).json({ error: 'Entrada de bitácora no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la entrada de la bitácora' });
    }
};