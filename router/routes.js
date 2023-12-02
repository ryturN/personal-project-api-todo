import express from "express";
import {deleteUser, login, register,verify} from "../controller/auth/api.js";
import { create, getNote } from "../controller/notes/api.js";

const router = express.Router();

// check api connected!
router.get('/',async(req,res)=>{
    res.status(202).json({
        status: 'success',
        message: 'API Connected!'
    })
})
// router.get('/verify/:id/:token')

//post
// router.post('/register',async(req,res)=>{
//     res.status(202).json({
//         status: 'success',
//         message : 'API REGISTER'
//     })
// });
router.get('/verify',verify)
router.post('/login',login)
router.post('/register',register)
router.post('/createNote',create)
router.get('/getNote',getNote)


router.delete('/removeAccount',deleteUser)
export default router