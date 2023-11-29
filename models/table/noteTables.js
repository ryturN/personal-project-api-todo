import { DATEONLY, DataType, DataTypes } from "sequelize";
import db from "../../db";

const noteTables = db.define('notes',{
    notes_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    checked:{
        type: DataTypes.BOOLEAN,
    },
    notes_name:{
        type: DataTypes.STRING,
    },
    notes_desc:{
        type: DataTypes.STRING,
    },
    id:{
        tpye: DataTypes.STRING,
    },
    due:{
        type: DataTypes.DATEONLY,
    },
    
})

noteTables.sync().then(()=>{
    console.log('notes has sync');
})

export default noteTables