import secretario from "../models/Secretario.js"
import jwt from "jsonwebtoken";

const loginService = async (email) => {
    try{
        const user_secretario = await secretario.findOne({email}).select('+senha');
        return user_secretario;
    }catch(error){
        console.error('Erro ao buscar Usuário para login:', error);
        throw new Error("Ocorreu um erro durante o login. Por favor, tente novamente mais tarde.");
    }
};

const genarateToken = (id) => jwt.sign({id:id}, process.env.SECRETJWT, {expiresIN: 86400})

export default {loginService, genarateToken}