import loginControler from "../controllers/login.controlers.js";
import {Router} from 'express';


const loginRouter = Router();

loginRouter.post("/", loginControler.login);

export default loginRouter;