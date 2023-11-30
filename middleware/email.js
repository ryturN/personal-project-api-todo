import nodemailer from 'nodemailer'
// import dotenv from 'dotenv'
// dotenv.config()

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: `watashiox@gmail.com`,
        pass: `xtcvwuvoxccwcong`,
    }
});

export const sendVerif = async(email) =>{
    return {
        from: 'TODO Verif',
        to: email,
        subject: 'verification email',
        html : `
        testing html
        `

    }
}

