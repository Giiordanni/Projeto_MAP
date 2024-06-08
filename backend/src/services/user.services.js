import User from "../models/Secretario.js";

const createService = (body) => User.create(body);
const findAllServices = () => User.find();

export default { createService, findAllServices };
