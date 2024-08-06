// controllers/vinculacionIotController.js
import VinculacionIot from '../models/model_vinculacion_iot.js';
import Clima from '../models/model_climas.js';
import { Op } from 'sequelize';

// Obtener todas las vinculaciones
export const getVinculacionesIot = async (req, res) => {
    try {
        const vinculaciones = await VinculacionIot.findAll();
        res.json(vinculaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una vinculacion por ID
export const getVinculacionIot = async (req, res) => {
    try {
        const vinculacion = await VinculacionIot.findByPk(req.params.Id_vinculacion_iot);
        if (vinculacion) {
            res.json(vinculacion);
        } else {
            res.status(404).json({ message: 'Vinculacion no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva vinculacion
export const createVinculacionIot = async (req, res) => {
    try {
        const nuevaVinculacion = await VinculacionIot.create(req.body);
        res.status(201).json(nuevaVinculacion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una vinculacion
export const updateVinculacionIot = async (req, res) => {
    try {
        const [updated] = await VinculacionIot.update(req.body, {
            where: { Id_vinculacion_iot: req.params.Id_vinculacion_iot }
        });
        if (updated) {
            const updatedVinculacion = await VinculacionIot.findByPk(req.params.Id_vinculacion_iot);
            res.json(updatedVinculacion);
        } else {
            res.status(404).json({ message: 'Vinculacion no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una vinculacion
export const deleteVinculacionIot = async (req, res) => {
    try {
        const deleted = await VinculacionIot.destroy({
            where: { Id_vinculacion_iot: req.params.Id_vinculacion_iot }
        });
        if (deleted) {
            res.json({ message: 'Vinculacion eliminada correctamente' });
        } else {
            res.status(404).json({ message: 'Vinculacion no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un módulo IoT por su ID y determinar si es placa principal o secundaria
//VALIDACION DE LA TABLA DE VINCULACIONES
export const getModuloIotById = async (req, res) => {
    const { id } = req.params;
    try {
        const vinculacion = await VinculacionIot.findOne({
            where: {
                [Op.or]: [{ Id_placa_principal: id }, { Id_Placa_secundaria: id }]
            }
        });

        if (!vinculacion) {
            return res.status(404).json({ message: 'Módulo IoT no encontrado' });
        }

        const tipoPlaca = vinculacion.Id_placa_principal === parseInt(id) ? 0 : 1;
        res.json({ vinculacion, tipoPlaca });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};