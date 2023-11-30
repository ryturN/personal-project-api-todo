import {createUsers,findUsers,usernameCheck,emailCheck} from '../../models/function/users.js'
import jwt  from "jsonwebtoken";
import nodemailer from 'nodemailer'
import {transporter, sendVerif} from '../../middleware/email.js'
import { nanoid } from 'nanoid';


const register = async(req,res)=>{
    // try {
        const {username, email,password,confirmPassword} = req.body
        const id = `users_${nanoid(20)}`
            const dataStorage = {
                id,
                username,
                email,
                password,
                confirmPassword
            };
            const data = await jwt.sign({dataStorage},process.env.JWT_TOKEN,{expiresIn: '120s'});
            res.cookie('data',data),{
                httpOnly: true,
                maxAge: 120000,
                secure: true,
            }
            const checkUsername = await usernameCheck(username);
            const checkEmail = await emailCheck(email)
            console.log(data)
            // if(checkUsername.length > 0 || checkEmail.length > 0){
            //     return res.status(400).json({
            //         status: 'fail',
            //         message: 'username / email already used!'
                
            //     });
            // } 

            if(password !== confirmPassword){
                return res.status(400).json({
                    status: 'fail',
                    message: 'Password & confirm Password not match!'
                });
            }

            transporter.sendMail(await sendVerif(email),(error,info)=>{
                if(error){
                    console.log(`error sending email:`, error);
                    return res.status(500).json({
                        status: 'fail',
                        message: error
                    })
                }
                return console.log('message sent : %s', info.messageId);
            });
            return res.status(200).json({
                status: 'success',
                message: 'link has sent!'
            })
    // } catch (error) {
    //     error
    // }
}

export default register