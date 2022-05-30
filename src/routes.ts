import { Router } from "express";

import { UniversitiesController } from "./controllers/UniversitiesController";

const routes = Router()

routes.get("/universities", new UniversitiesController().handle)

export { routes }