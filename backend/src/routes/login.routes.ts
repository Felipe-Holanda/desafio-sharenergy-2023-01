import { Router } from "express";

const loginRouter = Router();

import shapeVerify from "../schemas/shapeVerify.seriallizer";
import { loginSchema } from "../schemas/schemas";

import verifyLoginMiddleware from "../middlewares/login/verifyLogin.middleware";
import loginController from "../controllers/login.controller";

loginRouter.post("", shapeVerify(loginSchema), verifyLoginMiddleware, loginController);

export default loginRouter;