import TrabajadoresModel from '../models/TrabajadoresModel.js';

// Crear un nuevo trabajador
export const createTrabajador = async (req, res) => {
    const { vch_nombre_trabajador, correo, vch_tipo_trabajador, vch_password, vch_foto } = req.body;
    try {
        const nuevoTrabajador = await TrabajadoresModel.create({ 
            vch_nombre_trabajador, 
            correo, 
            vch_tipo_trabajador, 
            vch_password, 
            vch_foto 
        });
        res.status(201).json(nuevoTrabajador);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el trabajador' });
    }
};

// Obtener todos los trabajadores
export const getTrabajadores = async (req, res) => {
    try {
        const trabajadores = await TrabajadoresModel.findAll();
        res.json(trabajadores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los trabajadores' });
    }
};

// Obtener un trabajador por su ID
export const getTrabajadorById = async (req, res) => {
    const { id } = req.params;
    try {
        const trabajador = await TrabajadoresModel.findByPk(id);
        if (trabajador) {
            res.json(trabajador);
        } else {
            res.status(404).json({ error: 'Trabajador no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el trabajador' });
    }
};

// Actualizar un trabajador
export const updateTrabajador = async (req, res) => {
    const { id } = req.params;
    const { vch_nombre_trabajador, correo, vch_tipo_trabajador, vch_password, vch_foto } = req.body;
    try {
        const trabajador = await TrabajadoresModel.findByPk(id);
        if (trabajador) {
            trabajador.vch_nombre_trabajador = vch_nombre_trabajador;
            trabajador.correo = correo;
            trabajador.vch_tipo_trabajador = vch_tipo_trabajador;
            trabajador.vch_password = vch_password;
            trabajador.vch_foto = vch_foto;
            await trabajador.save();
            res.json(trabajador);
        } else {
            res.status(404).json({ error: 'Trabajador no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el trabajador' });
    }
};

// Eliminar un trabajador
export const deleteTrabajador = async (req, res) => {
    const { id } = req.params;
    try {
        const trabajador = await TrabajadoresModel.findByPk(id);
        if (trabajador) {
            await trabajador.destroy();
            res.json({ message: 'Trabajador eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Trabajador no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el trabajador' });
    }
};
