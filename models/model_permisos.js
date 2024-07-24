    import { DataTypes } from 'sequelize';
    import db from '../database/db.js';

    const Permiso = db.define('model_permiso', {
        Id_permiso: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Id_clave_trabajador: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tbl_trabajadores',
                key: 'Id_clave_trabajador'
            }
        },
        Id_clima: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tbl_climas',
                key: 'Id_clima'
            }
        }
    }, {
        tableName: 'tbl_permisos',
        timestamps: false // Desactiva las columnas createdAt y updatedAt
    });

export default Permiso;