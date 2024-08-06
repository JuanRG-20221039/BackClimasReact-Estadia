import TipoAula from '../models/model_tipos_aula.js';

// Obtener todos los tipos de aula
export const getTiposAula = async (req, res) => {
    try {
        const tiposAula = await TipoAula.findAll();
        res.json(tiposAula);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un tipo de aula por ID
export const getTipoAulaById = async (req, res) => {
    try {
        const tipoAula = await TipoAula.findByPk(req.params.Id_tipo_aula);
        if (tipoAula) {
            res.json(tipoAula);
        } else {
            res.status(404).json({ message: 'Tipo de aula no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo tipo de aula
export const createTipoAula = async (req, res) => {
    try {
        const nuevoTipoAula = await TipoAula.create(req.body);
        res.status(201).json(nuevoTipoAula);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un tipo de aula por ID
export const updateTipoAula = async (req, res) => {
    try {
        const tipoAula = await TipoAula.findByPk(req.params.Id_tipo_aula);
        if (tipoAula) {
            await tipoAula.update(req.body);
            res.json({ message: 'Tipo de aula actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'Tipo de aula no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un tipo de aula por ID
export const deleteTipoAula = async (req, res) => {
    try {
        const tipoAula = await TipoAula.findByPk(req.params.Id_tipo_aula);
        if (tipoAula) {
            await tipoAula.destroy();
            res.json({ message: 'Tipo de aula eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Tipo de aula no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un tipo de aula por nombre
export const getTipoAulaByName = async (req, res) => {
    try {
        const tipoAula = await TipoAula.findOne({ where: { Tipo: req.params.Tipo } });
        if (tipoAula) {
            res.json(tipoAula);
        } else {
            res.status(404).json({ message: 'Tipo de aula no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
