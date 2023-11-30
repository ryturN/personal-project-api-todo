import tokenVerify from "../table/tokenVerify";

export const createToken = async(id,token)=>{
    tokenVerify.create({
        id,
        token
    })
}