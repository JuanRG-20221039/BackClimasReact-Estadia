// COMENTARIOS PARA AGREGAR O IMPLEMENTAR CODIGO:

// >>> IGNORA LOS ERRORES

EJEMPLO:
// >>>IMPLEMENTAR EN CONTROLADOR DE AULAS
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Es para cambiar el estado de la 

