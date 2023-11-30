import db from "../../db/index.js";
import  DataTypes  from "sequelize";

const usersTable = db.define('users',{
    nomor: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
    },
    id:{
        type: DataTypes.STRING,
        primaryKey: true,
    },
    username:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
    },
    password:{
      type: DataTypes.STRING,
    },
    verify:{
        type: DataTypes.STRING,
        defaultValue: 'false',
    }
})

usersTable.sync().then(()=>{
    console.log('user table has sync')
})

export default usersTable