import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const ReporteUsuario = db.define('model_reporte_usuario', {
    Id_reporte_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Id_aula: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'tbl_aulas',
            key: 'Id_aula'
        }
    },
    Id_Clave_trabajador: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'tbl_trabajadores',
            key: 'Id_clave_trabajador'
        }
    },
    Fecha_solicitud: {
        type: DataTypes.DATE,
        allowNull: true
    },
    Fecha_finalizacion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    Descripcion: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Id_tipo_reporte: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'tbl_tipo_reporte',
            key: 'Id_tipo_reporte'
        }
    }
}, {
    tableName:'tbl_reporte_usuario',
    timestamps: false // Desactiva las columnas createdAt y updatedAt
});

export default ReporteUsuario;
