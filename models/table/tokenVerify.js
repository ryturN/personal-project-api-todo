import db from "../../db/index.js";
import DataTypes from "sequelize";

const tokenVerify = db.define('verify',{
    id:{
        type: DataTypes.STRING,
    },
    token:{
        type: DataTypes.STRING,
    }
})

export default tokenVerify