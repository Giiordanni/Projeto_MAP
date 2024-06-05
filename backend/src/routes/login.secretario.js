import loginControler from "../controllers/login.controlers.js";
import express from 'express';

const route = express.Router();

route.post("/", loginControler.login);

export default route;