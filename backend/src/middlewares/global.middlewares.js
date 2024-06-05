import mongoose from 'mongoose';
import SecServices from '../services/secretario.services.js';

export const validId = (req, res, next) => {
    try{
        const id = req.params._id

        if(mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send({message: "ID inválido!"})
        }
        next();
    }catch (error){
        res.status(500).send({message: error.message});
    }
}

export const ValidUser = async (req, res, next) => {
    try{
        const id = req.params._id

        const sec = await SecServices.findyByIdServices(id);


        if(!sec){
            return res.status(400).send({message: "Usuário não encontrado!"})
        }

        req.id = id;
        req.sec = sec;
        next();
    }catch (error) {
        res.status(500).send({message: error.messagae});
    }
};