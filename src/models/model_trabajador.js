import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import TipoTrabajador from './model_tipo_trabajador.js';
import Perfil from './model_perfil.js';

const Trabajador = db.define('model_trabajador', {
    Id_clave_trabajador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Clave_trabajador: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true
    },
    Nombre_del_trabajador: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Apellido_paterno: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Apellido_materno: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    tipo_trabajador: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: TipoTrabajador,
            key: 'Id_tipo_de_trabajador'
        }
    },
    Contraseña: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Correo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    id_perfil: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Perfil,
            key: 'Id_perfil'
        }
    }
}, {
    tableName:'tbl_trabajadores',
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

// Relaciones
Trabajador.belongsTo(TipoTrabajador, { foreignKey: 'tipo_trabajador' });
Trabajador.belongsTo(Perfil, { foreignKey: 'id_perfil' });

export default Trabajador;
