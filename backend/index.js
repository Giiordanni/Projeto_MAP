import express from "express";
import dotenv from "dotenv";
import connectdataBase from "./src/database/db.js";
import userRoute from "./src/routes/user.secreatario.js"
import loginrouter from "./src/routes/login.secretario.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
connectdataBase()
app.use(express.json());

app.use("/secretaria", userRoute);
app.use("/login", loginrouter);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
