import noteTables from "../table/noteTables.js";

export const createNote = async (checked,notes_name,notes_desc,id,due)=>{
    await noteTables.create({
        checked,
        notes_name,
        notes_desc,
        id,
        due,
    })
};

export const findNote = async(id)=>{
    try { 
        const result = await noteTables.findOne({where: {id}})
        if (result){
            return result
        }
    } catch (error) {
        console.error('error',error);
        throw error
    }
}