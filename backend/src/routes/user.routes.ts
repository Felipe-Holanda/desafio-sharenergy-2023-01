import { Router } from "express";

const userRouter = Router();

import shapeVerify from "../schemas/shapeVerify.seriallizer";
import { registerSchema, updateSchema } from "../schemas/schemas";


import verifyAuthMiddleware from "../middlewares/auth/verifyAuth.middleware";
import verifyDuplicateMiddleware from "../middlewares/register/verifyRegister.middleware";
import {
    listUsersController, deleteUsersController,
    patchUserController, registerUserController
} from "../controllers/users.controller";

userRouter.get("", verifyAuthMiddleware, listUsersController);
userRouter.post("", shapeVerify(registerSchema), verifyDuplicateMiddleware, registerUserController);
userRouter.patch("", shapeVerify(updateSchema), verifyAuthMiddleware, verifyDuplicateMiddleware, patchUserController);
userRouter.delete("", verifyAuthMiddleware, deleteUsersController);

export default userRouter;