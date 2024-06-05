import loginControler from "../controllers/login.controlers.js";
import {Router} from 'express';


const route = Router();

route.post("/", loginControler.login);

export default route;