//importacion de la conexion con la base de datos
import db from "../database/db.js";
import { DataTypes } from "sequelize";

//modelo de -- tbl_aulas
const AulasModel = db.define('tbl_aulas', {
    clv_aula: { 
        type: DataTypes.INTEGER,
        primaryKey: true // Asegura que se define como clave primaria
    },
    vch_aula: { 
        type: DataTypes.STRING(100) // Especifica la longitud del VARCHAR
    },
    clv_edificio: { 
        type: DataTypes.INTEGER
    },
}, {
    tableName: 'tbl_aulas', // Especifica el nombre exacto de la tabla
    timestamps: false // Si no tienes columnas de createdAt y updatedAt
});

export default AulasModel;