import {createNote,findNote} from "../../models/function/createNote.js";
import jwt from 'jsonwebtoken'
import { findUsername } from "../../models/function/users.js";

export const create = async (req,res)=>{
    try {
        const {checked,notes_name,notes_desc} = req.body
        const cookie =await req.cookies
        const token = cookie.token
        if(!token){
            return res.status(404).json({
                status: 'fail',
                message: 'unauthorized!'
            })
        }
        jwt.verify(token,process.env.JWT_TOKEN,async (error,decoded)=>{
            if(error){
                return res.status(404).json({
                    status: 'fail',
                    message: error
                })
            }
            const username = await decoded.username
            const user = await findUsername(username)
            const id = user.id
            const result = findNote(id)
            if(user){
                createNote(
                    checked,
                    notes_name,
                    notes_desc,
                    id,
                    due,
                    )
                    return res.status(200).json({
                        status: 'success',
                        message: 'success post!',
                        result:{
                            userID : id,
                            checked : checked,
                            name : notes_name,
                            desc: notes_desc,
                        },
                    })
            }
        })
    } catch (error) {
        console.error('error',error)
        throw error   
    }
}
