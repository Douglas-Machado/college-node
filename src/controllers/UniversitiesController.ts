import { Request, Response } from "express";
import { UniversitiesService } from "../services/UniversitiesServer"

class UniversitiesController {
  async handle(request: Request, response: Response) {
    const service = new UniversitiesService()

    try{
      const result = await service.execute()
      console.log(result)

      return response.json(result)
    }catch(e){
      console.log(e)
    }
  }
}

export { UniversitiesController }