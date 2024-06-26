// COMENTARIOS PARA AGREGAR O IMPLEMENTAR CODIGO:
// >>> IGNORAR LOS ERRORES




/*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  */
//                  >>> [✔✔] <<< YA IMPLEMENTADO
/*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  */




// >>>IMPLEMENTAR EN CONTROLADOR DE Trabajador [✔✔]
//Es para iniciar sesion con la clave del trabajador 
export const iniciarSesion = async (req, res) => {
  const { Clave_trabajador, Contraseña } = req.body;

  try {
    const trabajador = await Trabajador.findOne({
      where: {
        Clave_trabajador,
        Contraseña,
      },
    });

    if (trabajador) {
      res.json({ message: 'Autenticación exitosa' });
    } else {
      res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

// >>>IMPLEMENTAR EN CONTROLADOR DE Trabajador [✔✔]
//es para buscar a un trabajador por medio de la clave 
export const obtenerTrabajadorPorClave = async (req, res) => {
  const { Clave_trabajador } = req.params;

  try {
    const trabajador = await Trabajador.findOne({
      where: { Clave_trabajador }
    });

    if (trabajador) {
      res.json(trabajador);
    } else {
      res.status(404).json({ message: `No se encontró ningún trabajador con la Clave trabajador ${Clave_trabajador}` });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
