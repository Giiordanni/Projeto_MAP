import User from "../models/Secretario.js";

const createRepositories = (body) => User.create(body);
const findAllRepositories = () => User.find();
const findByEmailRepositories = (email) => User.findOne({email: email})

export default { createRepositories, findAllRepositories, findByEmailRepositories };


