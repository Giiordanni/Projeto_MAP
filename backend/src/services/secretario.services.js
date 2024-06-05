import secretario from '../models/Secretario.js';

const create_sec = async (body) => secretario.create(body);


export default {create_sec};
