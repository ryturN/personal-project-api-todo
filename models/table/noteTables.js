import DataTypes from "sequelize";
import db from "../../db/index.js";

const noteTables = db.define('notes',{
    notes_id:{
        type: DataTypes.STRING,
        primaryKey: true
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
        type: DataTypes.STRING,
    },
    due:{
        type: DataTypes.DATEONLY,
    },
    
})

noteTables.sync().then(()=>{
    console.log('notes has sync');
})

export default noteTables