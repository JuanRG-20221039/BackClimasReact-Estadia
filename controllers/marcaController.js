import Marca from '../models/model_marca.js';

// Obtener todas las marcas
export const getMarcas = async (req, res) => {
    try {
        const marcas = await Marca.findAll();
        res.json(marcas);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener una marca por ID
export const getMarca = async (req, res) => {
    try {
        const marca = await Marca.findByPk(req.params.Id_marca);
        res.json(marca);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear una nueva marca
export const createMarca = async (req, res) => {
    try {
        await Marca.create(req.body);
        res.json({ message: 'Marca creada correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar una marca
export const updateMarca = async (req, res) => {
    try {
        await Marca.update(req.body, {
            where: {
                Id_marca: req.params.Id_marca
            }
        });
        res.json({ message: 'Marca actualizada correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar una marca
export const deleteMarca = async (req, res) => {
    try {
        await Marca.destroy({
            where: {
                Id_marca: req.params.Id_marca
            }
        });
        res.json({ message: 'Marca eliminada correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};
