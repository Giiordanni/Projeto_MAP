import userServices from '../services/user.services.js';


const create = async (req, res) => {
  const body = req.body;

  try {
    const user = await userServices.createServices(body);
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send({message: err.message});
  }
};


const findAll = async (req, res) => {
    try{ 
        const users = await userServices.findAllSerices();
        return res.send(users)
    } catch(err){
      return res.status(500).send({message: err.message});
    }
};



export default {
  create,
  findAll
};
