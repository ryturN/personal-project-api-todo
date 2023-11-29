import express from "express";
const router = express.Router();

// check api connected!
router.get('/',async(req,res)=>{
    res.status(202).json({
        status: 'success',
        message: 'API Connected!'
    })
})

//post
router.post('/register',async(req,res)=>{
    res.status(202).json({
        status: 'success',
        message : 'API REGISTER'
    })
});
router.post('/login',)

export default router