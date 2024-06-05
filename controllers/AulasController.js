import Aula from '../models/model_aulas.js';

// Obtener todas las aulas
export const getAulas = async (req, res) => {
  try {
    const aulas = await Aula.findAll();
    res.json(aulas);
  } catch (error) {
    console.error('Error al obtener las aulas:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Crear una nueva aula
export const crearAula = async (req, res) => {
  const { Nombre_aula, Id_edificio } = req.body;
  try {
    const nuevaAula = await Aula.create({ Nombre_aula, Id_edificio });
    res.status(201).json(nuevaAula);
  } catch (error) {
    console.error('Error al crear el aula:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener un aula por su ID
export const getAulaById = async (req, res) => {
  const { id } = req.params;
  try {
    const aula = await Aula.findByPk(id);
    if (!aula) {
      res.status(404).json({ error: 'Aula no encontrada' });
    } else {
      res.json(aula);
    }
  } catch (error) {
    console.error('Error al obtener el aula:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Actualizar un aula por su ID
export const actualizarAula = async (req, res) => {
  const { id } = req.params;
  const { Nombre_aula, Id_edificio } = req.body;
  try {
    const aula = await Aula.findByPk(id);
    if (!aula) {
      res.status(404).json({ error: 'Aula no encontrada' });
    } else {
      await aula.update({ Nombre_aula, Id_edificio });
      res.json(aula);
    }
  } catch (error) {
    console.error('Error al actualizar el aula:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Eliminar un aula por su ID
export const eliminarAula = async (req, res) => {
  const { id } = req.params;
  try {
    const aula = await Aula.findByPk(id);
    if (!aula) {
      res.status(404).json({ error: 'Aula no encontrada' });
    } else {
      await aula.destroy();
      res.json({ message: 'Aula eliminada correctamente' });
    }
  } catch (error) {
    console.error('Error al eliminar el aula:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};