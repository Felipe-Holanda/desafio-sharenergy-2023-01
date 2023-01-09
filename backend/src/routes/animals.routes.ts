import { Router } from "express";

const animalRoutes = Router();

import { catMiddleware } from "../middlewares/animals/cat.middleware";

import { catController } from "../controllers/animals.controller";
import { dogController } from "../controllers/animals.controller";

animalRoutes.get("/cat/:status", catMiddleware, catController);
animalRoutes.get("/dog", dogController);

export default animalRoutes;