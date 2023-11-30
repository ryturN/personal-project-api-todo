import express from "express";
import register from "../controller/auth/api.js";

const router = express.Router();

// check api connected!
router.get('/',async(req,res)=>{
    res.status(202).json({
        status: 'success',
        message: 'API Connected!'
    })
})

//post
// router.post('/register',async(req,res)=>{
//     res.status(202).json({
//         status: 'success',
//         message : 'API REGISTER'
//     })
// });
router.post('/login',)
router.post('/register',register)

export default router