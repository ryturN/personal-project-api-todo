import express from "express";
import {register,verify} from "../controller/auth/api.js";

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
router.post('/login',)
router.post('/register',register)
router.post('/verify',verify)

export default router