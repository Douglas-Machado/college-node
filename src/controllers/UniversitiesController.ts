import { Request, Response } from "express";
import { UniversitiesModel } from "../models/UniversitiesModel"

const service = new UniversitiesModel();

class UniversitiesController{
    async listCountries(request: Request, response: Response){
        try{
            if(request.query.country) {
                const country: string = request.query.country as string
                const result = await service.listAll(country);
    
                return response.json(result)
            }
            const result = await service.listAll();
    
            return response.json(result)
        }catch(err){
            return response.send({error: err.message})
        }
    }

    async getUniversity(request: Request, response: Response){
        try{
            const { id } = request.params
            const result = await service.findUniversity(id)
            
            return response.json(result)
        }catch(err){
            return response.send({error: err.message})
        }

    }

    async deleteUniversity(request: Request, response: Response){
        try{
            const { id } = request.params
    
            const result = await service.deleteUniversity(id)
    
            return response.json(result)
        }catch(err){
            return response.send({error: err.message})
        }
    }
}

export { UniversitiesController}