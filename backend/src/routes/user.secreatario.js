import {Router} from "express";
import UserController from "../controllers/User.controller.js";
import { validId, ValidUser } from "../middlewares/global.middlewares.js";

const route = Router();

route.post("/", UserController.create);
route.get("/", UserController.findAll);


export default route;
