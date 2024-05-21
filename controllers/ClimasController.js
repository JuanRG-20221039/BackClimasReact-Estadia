import ClimasModel from '../models/ClimasModel.js';

// Crear un nuevo registro de clima
export const createClima = async (req, res) => {
    const { vch_modelo, vch_marca, vch_capacidad, vch_voltaje, date_ingreso, clv_edificio, clv_aula, estado } = req.body;
    try {
        const nuevoClima = await ClimasModel.create({ 
            vch_modelo, 
            vch_marca, 
            vch_capacidad, 
            vch_voltaje, 
            date_ingreso, 
            clv_edificio, 
            clv_aula, 
            estado 
        });
        res.status(201).json(nuevoClima);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el registro de clima' });
    }
};

// Obtener todos los registros de clima
export const getClimas = async (req, res) => {
    try {
        const climas = await ClimasModel.findAll();
        res.json(climas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los registros de clima' });
    }
};

// Obtener un registro de clima por su clave
export const getClimaById = async (req, res) => {
    const { id } = req.params;
    try {
        const clima = await ClimasModel.findByPk(id);
        if (clima) {
            res.json(clima);
        } else {
            res.status(404).json({ error: 'Registro de clima no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el registro de clima' });
    }
};

// Actualizar un registro de clima
export const updateClima = async (req, res) => {
    const { id } = req.params;
    const { vch_modelo, vch_marca, vch_capacidad, vch_voltaje, date_ingreso, clv_edificio, clv_aula, estado } = req.body;
    try {
        const clima = await ClimasModel.findByPk(id);
        if (clima) {
            clima.vch_modelo = vch_modelo;
            clima.vch_marca = vch_marca;
            clima.vch_capacidad = vch_capacidad;
            clima.vch_voltaje = vch_voltaje;
            clima.date_ingreso = date_ingreso;
            clima.clv_edificio = clv_edificio;
            clima.clv_aula = clv_aula;
            clima.estado = estado;
            await clima.save();
            res.json(clima);
        } else {
            res.status(404).json({ error: 'Registro de clima no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el registro de clima' });
    }
};

// Eliminar un registro de clima
export const deleteClima = async (req, res) => {
    const { id } = req.params;
    try {
        const clima = await ClimasModel.findByPk(id);
        if (clima) {
            await clima.destroy();
            res.json({ message: 'Registro de clima eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Registro de clima no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el registro de clima' });
    }
};
