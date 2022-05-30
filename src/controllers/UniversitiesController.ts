import { Request, Response } from "express";
import { UniversitiesModel } from "../models/UniversitiesModel"

class UniversitiesController{
    async listCountries(req: Request, res: Response){
        const service = new UniversitiesModel();

        const result = await service.execute();

        return res.json(result)
    }
}

export { UniversitiesController}