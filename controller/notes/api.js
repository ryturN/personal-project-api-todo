import {createNote,findNote, getAllNote} from "../../models/function/note.js";
import jwt from 'jsonwebtoken'
import { findUsername } from "../../models/function/users.js";

export const create = async (req,res)=>{
    try {
        const {checked,notes_name,notes_desc,due} = req.body
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
            const notes_id = `notes_${nanoid(7)}`
            if(user){
                createNote(
                    checked,
                    notes_id,
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


export const getNote = async (req,res)=>{
    try {
        const cookie = await req.cookies
        const token = cookie.token
        if(!token){
            return res.status(404).json({
                status: 'fail',
                message: 'you must login!'})
        }
        jwt.verify(token,process.env.JWT_TOKEN, async(error,decoded)=>{
            if(error){
                return res.status(404).json({
                    status:'fail',
                    message: 'error',error
                })
            }
            const username = decoded.username
            const user = await findUsername(username)
            const id = user.id
            console.log(id)
            const result = await getAllNote(id)
            if(result){
                return res.status(200).json({
                    status: 'success',
                    message: 'success',
                    result:{
                        result
                    }
                })
            }
        })
    } catch (error) {
        console.error('error',error)
    }
}

export const deleteNote = async(req,res)=>{
    try {
        const {notes_id} = req.body
        const cookie = await req.cookies
        const token = cookie.token
        if(!token){
            return res.status(404).json({
                status: 'fail',
                message: 'you must login!'
            })
        }
        jwt.verify(token,process.env.JWT_TOKEN, async(error,decoded)=>{
            if(error){
                return res.status(404).json({
                    status: 'fail',
                    message: 'error',error
                })
            }
            const username = decoded.username
            const user = await findUsername(username)
            const id = user.id
            const result = await findNote({
                where:{
                    notes_id
                }
            })
            if(result){
                await result.destroy({where:{notes_id}})
                return res.status(200).json({
                    status: 'success',
                    message: 'success delete!'
                })
            }
        })
    } catch (error) {
        return res.status(404).json({
            status: 'fail',
            message: 'error',error
        })
    }
}

export const updateNote = async(req,res)=>{
try {
    const {notes_id,checked,notes_name,notes_desc,due} = req.body
    const cookie = await req.cookies
    const token = cookie.token
    if(!token){
        return res.status(404).json({
            status: 'fail',
            message: 'you must login!'
        })
    }
    jwt.verify(token,process.env.JWT_TOKEN, async(error,decoded)=>{
        if(error){
            return res.status(404).json({
                status: 'fail',
                message: 'error',error
            })
        }
        const username = decoded.username
        const user = await findUsername(username)
        const id = user.id
        const result = await findNote({
            where:{
                notes_id
            }
        })
        if(result){
            await result.update({
                checked,
                notes_name,
                notes_desc,
                due
            })
            return res.status(200).json({
                status: 'success',
                message: 'success update!'
            })
        }
    })
} catch (error) {
    return res.status(404).json({
        status: 'fail',
        message: 'error',error
    })
}
}