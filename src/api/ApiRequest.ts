import { CountryModel } from "../models/collections/country"
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
          CountryModel.create(
            {
              ...country[1],
              stateProvince: country[1]['state-province'],
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