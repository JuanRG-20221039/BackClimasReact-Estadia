import Trabajador from '../models/model_trabajador.js';

// Obtener todos los trabajadores
export const getTrabajadores = async (req, res) => {
    try {
        const trabajadores = await Trabajador.findAll();
        res.json(trabajadores);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener un trabajador por ID
export const getTrabajador = async (req, res) => {
    try {
        const trabajador = await Trabajador.findByPk(req.params.Id_clave_trabajador);
        res.json(trabajador);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un nuevo trabajador
export const createTrabajador = async (req, res) => {
    try {
        await Trabajador.create(req.body);
        res.json({ message: 'Trabajador creado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un trabajador
export const updateTrabajador = async (req, res) => {
    try {
        await Trabajador.update(req.body, {
            where: {
                Id_clave_trabajador: req.params.Id_clave_trabajador
            }
        });
        res.json({ message: 'Trabajador actualizado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar un trabajador
export const deleteTrabajador = async (req, res) => {
    try {
        await Trabajador.destroy({
            where: {
                Id_clave_trabajador: req.params.Id_clave_trabajador
            }
        });
        res.json({ message: 'Trabajador eliminado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};
