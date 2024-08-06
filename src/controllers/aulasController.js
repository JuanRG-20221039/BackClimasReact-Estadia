import Aula from '../models/model_aulas.js';
import Edificio from '../models/model_edificios.js';

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
  const { Nombre_aula, Id_edificio, Id_tipo_aula } = req.body;
  try {
    const nuevaAula = await Aula.create({ Nombre_aula, Id_edificio, Id_tipo_aula });
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
  const { Nombre_aula, Id_edificio, Id_tipo_aula } = req.body;
  try {
    const aula = await Aula.findByPk(id);
    if (!aula) {
      res.status(404).json({ error: 'Aula no encontrada' });
    } else {
      await aula.update({ Nombre_aula, Id_edificio, Id_tipo_aula });
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

// Obtener todas las aulas por un ID de un edificio en específico
export const getAulasPorEdificio = async (req, res) => {
  const { idEdificio } = req.params;
  try {
    const aulas = await Aula.findAll({ where: { Id_edificio: idEdificio } });
    if (aulas.length === 0) {
      res.status(404).json({ error: 'No se encontraron aulas para el edificio especificado' });
    } else {
      res.json(aulas);
    }
  } catch (error) {
    console.error('Error al obtener las aulas por edificio:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener un aula por su nombre el edificio y el tipo
export const getAulaPorNombreEdificioTipo = async (req, res) => {
  const { nombreAula, idEdificio, idTipo } = req.params;
  try {
    const aula = await Aula.findOne({
      where: { Nombre_aula: nombreAula, Id_edificio: idEdificio, Id_tipo_aula: idTipo },
      include: [
        {
          model: Edificio,
          as: 'edificio',
          attributes: ['Nombre_edificio']
        }
      ]
    });
    if (!aula) {
      res.status(404).json({ error: 'Aula no encontrada' });
    } else {
      res.json(aula);
    }
  } catch (error) {
    console.error('Error al obtener el aula por nombre y edificio:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener un aula por su nombre y el edificio
export const getAulaPorNombreYEdificio = async (req, res) => {
  const { nombreAula, idEdificio } = req.params;
  try {
    const aula = await Aula.findOne({
      where: { Nombre_aula: nombreAula, Id_edificio: idEdificio },
      include: [
        {
          model: Edificio,
          as: 'edificio',
          attributes: ['Nombre_edificio']
        }
      ]
    });
    if (!aula) {
      res.status(404).json({ error: 'Aula no encontrada' });
    } else {
      res.json(aula);
    }
  } catch (error) {
    console.error('Error al obtener el aula por nombre y edificio:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
