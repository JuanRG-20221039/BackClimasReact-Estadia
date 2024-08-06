import Edificio from '../models/model_edificios.js';

// Obtener todos los edificios
export const getEdificios = async (req, res) => {
    try {
        const edificios = await Edificio.findAll();
        res.json(edificios);
    } catch (error) {
        console.error('Error al obtener los edificios:', error);
        res.status(500).json({ message: 'Error al obtener los edificios' });
    }
};

// Obtener un edificio por su ID
export const getEdificioPorId = async (req, res) => {
    const id = req.params.id;
    try {
        const edificio = await Edificio.findByPk(id);
        if (!edificio) {
            res.status(404).json({ message: 'Edificio no encontrado' });
        } else {
            res.json(edificio);
        }
    } catch (error) {
        console.error('Error al obtener el edificio por ID:', error);
        res.status(500).json({ message: 'Error al obtener el edificio' });
    }
};

// Crear un nuevo edificio
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

// Actualizar un edificio por su ID
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

// Eliminar un edificio por su ID
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

// Obtener un edificio por su nombre
export const getEdificioPorNombre = async (req, res) => {
    const { nombre } = req.params;
    try {
        const edificio = await Edificio.findOne({ where: { Nombre_edificio: nombre } });
        if (!edificio) {
            res.status(404).json({ message: 'Edificio no encontrado' });
        } else {
            res.json(edificio);
        }
    } catch (error) {
        console.error('Error al obtener el edificio por nombre:', error);
        res.status(500).json({ message: 'Error al obtener el edificio' });
    }
};