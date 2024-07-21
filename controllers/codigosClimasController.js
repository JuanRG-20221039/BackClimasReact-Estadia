import CodigoClima from '../models/model_codigos_climas.js';

// Obtener todos los códigos de clima
export const getCodigosClima = async (req, res) => {
    try {
        const codigos = await CodigoClima.findAll();
        res.json(codigos);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener un código de clima por ID
export const getCodigoClima = async (req, res) => {
    try {
        const codigo = await CodigoClima.findByPk(req.params.Id_codigo);
        res.json(codigo);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un nuevo código de clima
export const createCodigoClima = async (req, res) => {
    try {
        await CodigoClima.create(req.body);
        res.json({ message: 'Código de clima creado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un código de clima
export const updateCodigoClima = async (req, res) => {
    try {
        await CodigoClima.update(req.body, {
            where: {
                Id_codigo: req.params.Id_codigo
            }
        });
        res.json({ message: 'Código de clima actualizado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar un código de clima
export const deleteCodigoClima = async (req, res) => {
    try {
        await CodigoClima.destroy({
            where: {
                Id_codigo: req.params.Id_codigo
            }
        });
        res.json({ message: 'Código de clima eliminado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};
