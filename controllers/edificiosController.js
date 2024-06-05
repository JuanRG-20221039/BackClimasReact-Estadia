import Edificio from '../models/model_edificios.js';

// Controlador para la tabla de edificios

export const getEdificios = async (req, res) => {
    try {
        const edificios = await Edificio.findAll();
        res.json(edificios);
    } catch (error) {
        console.error('Error al obtener los edificios:', error);
        res.status(500).json({ message: 'Error al obtener los edificios' });
    }
};

export const createEdificio = async (req, res) => {
    const { Nombre_edificio, Imagen } = req.body;
    try {
        const nuevoEdificio = await Edificio.create({ Nombre_edificio, Imagen });
        res.status(201).json(nuevoEdificio);
    } catch (error) {
        console.error('Error al crear un nuevo edificio:', error);
        res.status(500).json({ message: 'Error al crear un nuevo edificio' });
    }
};

export const updateEdificio = async (req, res) => {
    const id = req.params.id;
    const { Nombre_edificio, Imagen } = req.body;
    try {
        await Edificio.update({ Nombre_edificio, Imagen }, { where: { Id_edificio: id } });
        res.json({ message: 'Edificio actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar el edificio:', error);
        res.status(500).json({ message: 'Error al actualizar el edificio' });
    }
};

export const deleteEdificio = async (req, res) => {
    const id = req.params.id;
    try {
        await Edificio.destroy({ where: { Id_edificio: id } });
        res.json({ message: 'Edificio eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar el edificio:', error);
        res.status(500).json({ message: 'Error al eliminar el edificio' });
    }
};
