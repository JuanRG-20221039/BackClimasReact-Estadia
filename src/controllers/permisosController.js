import Permiso from '../models/model_permisos.js';

// Obtener todos los permisos
export const getPermisos = async (req, res) => {
    try {
        const permisos = await Permiso.findAll();
        res.json(permisos);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener un permiso por ID
export const getPermiso = async (req, res) => {
    try {
        const permiso = await Permiso.findByPk(req.params.Id_permiso);
        res.json(permiso);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un nuevo permiso
export const createPermiso = async (req, res) => {
    try {
        await Permiso.create(req.body);
        res.json({ message: 'Permiso creado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un permiso
export const updatePermiso = async (req, res) => {
    try {
        await Permiso.update(req.body, {
            where: {
                Id_permiso: req.params.Id_permiso
            }
        });
        res.json({ message: 'Permiso actualizado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar un permiso
export const deletePermiso = async (req, res) => {
    try {
        await Permiso.destroy({
            where: {
                Id_permiso: req.params.Id_permiso
            }
        });
        res.json({ message: 'Permiso eliminado correctamente' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener permisos de un trabajador por ID
export const getPermisosPorTrabajador = async (req, res) => {
    try {
        const { Id_clave_trabajador } = req.params;
        // Suponiendo que en tu modelo 'Permiso' tienes un campo 'Id_trabajador' para hacer la relación
        const permisos = await Permiso.findAll({
            where: {
                Id_clave_trabajador: Id_clave_trabajador
            }
        });
        res.json(permisos);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Obtener un permiso por clave de trabajador y ID del clima
export const getPermisoPorTrabajadorYClima = async (req, res) => {
    try {
        const { id_clave_trabajador, id_clima } = req.params;
        const permiso = await Permiso.findOne({
            where: {
                Id_clave_trabajador: id_clave_trabajador,
                Id_clima: id_clima
            }
        });
        if (permiso) {
            res.json(permiso);
        } else {
            res.status(404).json({ message: 'Permiso no encontrado' });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar todos los permisos de un trabajador por ID
export const deletePermisosPorTrabajador = async (req, res) => {
    try {
        const { id_clave_trabajador } = req.params;
        // Elimina todos los permisos relacionados con el trabajador
        const result = await Permiso.destroy({
            where: {
                Id_clave_trabajador: id_clave_trabajador
            }
        });
        if (result) {
            res.json({ message: 'Permisos eliminados correctamente' });
        } else {
            res.status(404).json({ message: 'No se encontraron permisos para el trabajador especificado' });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const deletePermisosByIdClima = async (req, res) => {
    const { Id_clima } = req.params;
    try {
        await Permiso.destroy({
            where: { Id_clima }
        });
        res.status(200).json({ message: 'Permisos eliminados exitosamente' });
    } catch (error) {
        console.error('Error al eliminar los permisos:', error);
        res.status(500).json({ message: 'Error al eliminar los permisos' });
    }
};
