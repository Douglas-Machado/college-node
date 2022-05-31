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
        
        const parsedResponse = Object.entries(response.data)
        parsedResponse.map((country: any) => {
          UniversityModel.create(
            {
              ...country[1],
              alphaTwoCode: country[1].alpha_two_code,
              stateProvince: country[1]['state-province'],
              webPages: country[1].web_pages
            }
          )
        })
      })
      await Promise.all(result)
    }catch(e){
      console.log(e)
    }
  }
}

export { ApiRequest }