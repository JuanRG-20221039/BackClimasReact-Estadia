import Perfil from '../models/model_perfil.js';

// Obtener todos los perfiles
export const getPerfiles = async (req, res) => {
    try {
        const perfiles = await Perfil.findAll();
        res.json(perfiles);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener un perfil por ID
export const getPerfil = async (req, res) => {
    try {
        const perfil = await Perfil.findByPk(req.params.Id_perfil);
        res.json(perfil);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un nuevo perfil
export const createPerfil = async (req, res) => {
    try {
        await Perfil.create(req.body);
        res.json({ message: 'Perfil creado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un perfil
export const updatePerfil = async (req, res) => {
    try {
        await Perfil.update(req.body, {
            where: {
                Id_perfil: req.params.Id_perfil
            }
        });
        res.json({ message: 'Perfil actualizado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar un perfil
export const deletePerfil = async (req, res) => {
    try {
        await Perfil.destroy({
            where: {
                Id_perfil: req.params.Id_perfil
            }
        });
        res.json({ message: 'Perfil eliminado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};
