import TipoTrabajador from '../models/model_tipo_trabajador.js';

// Obtener todos los tipos de trabajadores
export const getTiposTrabajadores = async (req, res) => {
    try {
        const tipos = await TipoTrabajador.findAll();
        res.json(tipos);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener un tipo de trabajador por ID
export const getTipoTrabajador = async (req, res) => {
    try {
        const tipo = await TipoTrabajador.findByPk(req.params.Id_tipo_de_trabajador);
        res.json(tipo);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un nuevo tipo de trabajador
export const createTipoTrabajador = async (req, res) => {
    try {
        await TipoTrabajador.create(req.body);
        res.json({ message: 'Tipo de trabajador creado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un tipo de trabajador
export const updateTipoTrabajador = async (req, res) => {
    try {
        await TipoTrabajador.update(req.body, {
            where: {
                Id_tipo_de_trabajador: req.params.Id_tipo_de_trabajador
            }
        });
        res.json({ message: 'Tipo de trabajador actualizado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar un tipo de trabajador
export const deleteTipoTrabajador = async (req, res) => {
    try {
        await TipoTrabajador.destroy({
            where: {
                Id_tipo_de_trabajador: req.params.Id_tipo_de_trabajador
            }
        });
        res.json({ message: 'Tipo de trabajador eliminado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getTipoTrabajadorByTipo = async (req, res) => {
    try {
        const tipo = await TipoTrabajador.findOne({
            where: {
                Tipo_trabajador: req.params.Tipo_trabajador
            }
        });
        if (tipo) {
            res.json(tipo);
        } else {
            res.status(404).json({ message: 'Tipo de trabajador no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
