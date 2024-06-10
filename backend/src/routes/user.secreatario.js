import {Router} from "express";
import UserController from "../controllers/user.controllers.secretario.js";


const userRouter = Router();

userRouter.post("/", UserController.create);
userRouter.get("/", UserController.findAll);


export default userRouter;
