import loginService from "../services/login.services.js";
import bcrypt from 'bcrypt';


const login = async (req, res) => {
        const{email, senha, confirm_senha} = req.body;

    try{
        const secretario = await loginService.loginService(email);
        
        const senhaIsValid = bcrypt.compareSync(senha, secretario.senha);

        if(!secretario){
            return res.status(404).send("Senha ou usuário inválidos!");
        }

        if(!secretario.senha || !secretario){
            return res.status(400).send({message: "Senha ou usuário inválidos!"});
        }

        if(senha !== confirm_senha){
            return res.status(400).send({message: "Senha ou usuário inválidos!"});
        }


        

        if(!senhaIsValid){
            return res.status(400).send({message: "Senha ou usuário inválidos!"})
        }

        const token = loginService.genarateToken(secretario.id)
        res.send({token});
    }catch(err){
        res.status(500).send(err.message)
    }
};
 
export default { login };

// obs: coloquei a mesma menssagem de erro para senha ou email inválidos para que um hacker não saiba o que ele está errando ao tentar hackear o sistema. Nunca vai saber oq está errado!