import { Router } from "express";

import {
    listClientsController, listTargetClientController,
    registerClientController, patchClientController,
    deleteClientController, reactiveClientController
} from "../controllers/client.controller";

import verifyAuthMiddleware from "../middlewares/auth/verifyAuth.middleware";
import shapeVerify from "../schemas/shapeVerify.seriallizer";
import verifyTargetClientMiddleware from "../middlewares/clients/verifyTarget.middleware";

import { clientRegisterSchema, clientUpdateSchema } from "../schemas/schemas";

const clientRoutes = Router();

clientRoutes.get("", verifyAuthMiddleware, listClientsController)
clientRoutes.get("/:id", verifyAuthMiddleware, verifyTargetClientMiddleware, listTargetClientController)
clientRoutes.post("", shapeVerify(clientRegisterSchema), verifyAuthMiddleware, registerClientController)
clientRoutes.patch("/:id", shapeVerify(clientUpdateSchema), verifyAuthMiddleware, verifyTargetClientMiddleware, patchClientController)
clientRoutes.delete("/:id", verifyAuthMiddleware, verifyTargetClientMiddleware, deleteClientController)
clientRoutes.put("/:id", verifyAuthMiddleware, verifyTargetClientMiddleware, reactiveClientController)

export default clientRoutes;