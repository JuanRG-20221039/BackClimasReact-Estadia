import AulasModel from '../models/AulasModel.js';

//VERIFICAR QUE EL PARAMETRO TRANSFERIDO POR LA RUTA SEA EL MISMO
//SOLICITADO EN EL CONTROLADOR 2 {ID}

// Obtener todas las aulas
export const getAulas = async (req, res) => {
    try {
        const aulas = await AulasModel.findAll();
        res.json(aulas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las aulas' });
    }
};

// Obtener una aula por su clave
export const getAulaById = async (req, res) => {
    const { id } = req.params;
    try {
        const aula = await AulasModel.findByPk(id);
        if (aula) {
            res.json(aula);
        } else {
            res.status(404).json({ error: 'Aula no encontrada por su clave' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el aula' });
    }
};

// Crear una nueva aula
export const createAula = async (req, res) => {
    const { clv_aula, vch_aula, clv_edificio } = req.body;
    try {
        const nuevaAula = await AulasModel.create({ clv_aula, vch_aula, clv_edificio });
        res.status(201).json(nuevaAula);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el aula' });
    }
};

// Actualizar una aula existente
export const updateAula = async (req, res) => {
    const { clv_aula } = req.params;
    const { vch_aula, clv_edificio } = req.body;
    try {
        const aula = await AulasModel.findByPk(clv_aula);
        if (aula) {
            aula.vch_aula = vch_aula;
            aula.clv_edificio = clv_edificio;
            await aula.save();
            res.json(aula);
        } else {
            res.status(404).json({ error: 'Aula no encontrada para actualizar' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el aula' });
    }
};

// Eliminar una aula
export const deleteAula = async (req, res) => {
    const { clv_aula } = req.params;
    try {
        const aula = await AulasModel.findByPk(clv_aula);
        if (aula) {
            await aula.destroy();
            res.json({ message: 'Aula eliminada' });
        } else {
            res.status(404).json({ error: 'Aula no encontrada para eliminar' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el aula' });
    }
};
