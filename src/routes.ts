import { Router } from "express";

import { UniversitiesController } from "./controllers/UniversitiesController";
const universitiesController = new UniversitiesController()

const routes = Router()

routes.get("/universities", universitiesController.listCountries)
routes.get("/universities/:id", universitiesController.getUniversity)
routes.post("/universities", universitiesController.createUniversity)
routes.put("/universities/:id", universitiesController.updateUniversity)
routes.delete("/universities/:id", universitiesController.deleteUniversity)

export { routes }