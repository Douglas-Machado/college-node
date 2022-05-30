import { Router } from "express";

import { UniversitiesController } from "./controllers/UniversitiesController";

const routes = Router()

routes.get("/universities", new UniversitiesController().listCountries)
routes.get("/universities/:id", new UniversitiesController().getUniversity)

export { routes }