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
    const { Nombre_marca } = req.body;
    try {
        const nuevaMarca = await Marca.create({ ...req.body, Nombre_marca: Nombre_marca.toUpperCase() });
        res.json({ message: 'Marca creada correctamente', nuevaMarca });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar una marca
export const updateMarca = async (req, res) => {
    const { Nombre_marca } = req.body;
    try {
        await Marca.update(
            { ...req.body, Nombre_marca: Nombre_marca.toUpperCase() },
            {
                where: {
                    Id_marca: req.params.Id_marca
                }
            }
        );
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

// Obtener una marca por su nombre
//(Es una validacion para no diplicar registros de una marca)
export const getMarcaByNombre = async (req, res) => {
    const { nombre } = req.params;
    try {
        const marca = await Marca.findOne({ where: { Nombre_marca: nombre } });
        if (!marca) {
            return res.status(404).json({ message: 'Marca no encontrada' });
        }
        res.json(marca);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};