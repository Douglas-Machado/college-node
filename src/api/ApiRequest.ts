import { UniversityModel } from "../models/collections/country"
import axios from "axios"

const countriesUrl = [
  "http://universities.hipolabs.com/search?country=argentina", 
  "http://universities.hipolabs.com/search?country=brazil", 
  "http://universities.hipolabs.com/search?country=chile", 
  "http://universities.hipolabs.com/search?country=colombia", 
  "http://universities.hipolabs.com/search?country=paraguay", 
  "http://universities.hipolabs.com/search?country=peru", 
  "http://universities.hipolabs.com/search?country=suriname", 
  "http://universities.hipolabs.com/search?country=uruguay"
]

class ApiRequest{
  async execute(){
    try{
      const result = countriesUrl.map(async (urlParam: any) => {
        const response = await axios.get(urlParam)
        
        const parsedResponse: any = Object.entries(response.data)
        for (let i = 0; i < parsedResponse.length; i++){
          UniversityModel.create(
            {
            ...parsedResponse[i][1],
            alphaTwoCode: parsedResponse[i][1].alpha_two_code,
            stateProvince: parsedResponse[i][1]['state-province'],
            webPages: parsedResponse[i][1].web_pages
          })
        }
      })
      await Promise.all(result)
    }catch(e){
      console.log(e)
    }
  }
}
  
  
  
export { ApiRequest }