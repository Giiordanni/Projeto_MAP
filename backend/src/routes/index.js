import { Router } from 'express';
import userRouter from "./user.secreatario.js";
import loginRouter from "./login.secretario.js";

const router = Router();

router.use("/cadastrar", userRouter);
router.use("/login", loginRouter);

export default router;