import secretario from '../models/Secretario.js';

const create = async (body) => secretario.create(body);


export default {create};
