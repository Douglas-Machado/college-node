import { Request, Response } from "express";
import { UniversitiesModel } from "../models/UniversitiesModel"

const service = new UniversitiesModel();

class UniversitiesController{
    async listCountries(request: Request, response: Response){
        let index = Number(request.query.index)
        let limit = 20
        if(index === 0 || !index) {
            index = 0
        } else {
            limit = index + 20
        }
        try{
            if(request.query.country) {
                const country: string = request.query.country as string
                const result = await service.listAll(country);
                const resultResponse = result.slice(index, limit)
    
                return response.json(resultResponse)
            }
            const result = await service.listAll();
            const resultResponse = result.slice(index, limit)
    
            return response.json(resultResponse)
        }catch(err){
            return response.send({error: err.message})
        }
    }

    async getUniversity(request: Request, response: Response){
        try{
            const { id } = request.params
            const result = await service.find(id)
            
            return response.json(result)
        }catch(err){
            return response.send({error: err.message})
        }

    }

    async updateUniversity(request: Request, response: Response){
        try{
            const { id } = request.params
            const { web_pages, name, domains } = request.body
            const result = await service.update({id, web_pages, name, domains})

            return response.json(result)
        }catch(err){
            return response.send({error: err.message})
        }
    }

    async deleteUniversity(request: Request, response: Response){
        try{
            const { id } = request.params
    
            const result = await service.delete(id)
    
            return response.json(result)
        }catch(err){
            return response.send({error: err.message})
        }
    }
}

export { UniversitiesController}