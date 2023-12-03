import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
});

export const sendVerif = async(email,id,data) =>{
    return {
        from: 'TODO Verif',
        to: email,
        subject: 'verification email',
        html : `
        <a href="https://todo-api-mqxn4q5g2q-as.a.run.app/api/verify/?id=${id}&token=${data}">here</a>
        `
    }
}

export const sendReset = async(email,verificationCode) =>{
    return{
    from: 'TODO Reset', 
    to: email,
    subject: 'reset password',
    html: `your verif code is: ${code}`
}
}
