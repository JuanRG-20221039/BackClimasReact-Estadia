import Trabajador from '../models/model_trabajador.js';

// Obtener todos los trabajadores
export const getTrabajadores = async (req, res) => {
    try {
        const trabajadores = await Trabajador.findAll();
        res.json(trabajadores);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener un trabajador por ID
export const getTrabajadorPorId = async (req, res) => {
    try {
        const trabajador = await Trabajador.findByPk(req.params.Id_clave_trabajador);
        res.json(trabajador);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un nuevo trabajador
export const createTrabajador = async (req, res) => {
    try {
        await Trabajador.create(req.body);
        res.json({ message: 'Trabajador creado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un trabajador
export const updateTrabajador = async (req, res) => {
    try {
        await Trabajador.update(req.body, {
            where: {
                Id_clave_trabajador: req.params.Id_clave_trabajador
            }
        });
        res.json({ message: 'Trabajador actualizado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar un trabajador
export const deleteTrabajador = async (req, res) => {
    try {
        await Trabajador.destroy({
            where: {
                Id_clave_trabajador: req.params.Id_clave_trabajador
            }
        });
        res.json({ message: 'Trabajador eliminado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

//Es para iniciar sesion con la clave del trabajador 
export const iniciarSesionConClave = async (req, res) => {
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

// Función para iniciar sesión con el correo electrónico del trabajador
export const iniciarSesionConCorreo = async (req, res) => {
    const { Correo, Contraseña } = req.body;
    try {
        const trabajador = await Trabajador.findOne({
            where: {
                Correo,
                Contraseña,
            },
        });
        if (trabajador) {
            res.json({ message: 'Autenticación exitosa', Id_perfil: trabajador.Id_perfil });
        } else {
            res.status(401).json({ message: 'Correo o contraseña incorrectos' });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Función para obtener un trabajador por correo electrónico
export const getTrabajadorPorCorreo = async (req, res) => {
    const { correo } = req.params;
    try {
        const trabajador = await Trabajador.findOne({
            where: { Correo: correo }
        });

        if (trabajador) {
            res.json(trabajador);
        } else {
            res.status(404).json({ message: `No se encontró ningún trabajador con el correo electrónico ${correo}` });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};