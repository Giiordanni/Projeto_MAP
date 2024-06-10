import express from "express";
import dotenv from "dotenv";
import connectdataBase from "./src/database/db.js";
import router from "./src/routes/index.js";

dotenv.config();

const app = express();


connectdataBase()
app.use(express.json());
app.use(router);


export default app;
