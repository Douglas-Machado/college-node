import { UniversityModel } from "./collections/country"

interface IUniversityParams {
  id: string,
  web_pages: Array<string>;
  name: string,
  domains: Array<String>;
}

class UniversitiesModel{
  async listAll(countryParam = null) {
    try{
      if(!countryParam){
        const universityList = await UniversityModel.find({}, '_id name country stateProvince')
        
        return(universityList)
      }
      const country = this.parseCountryValue(countryParam)
      const universityList = await UniversityModel.find({country: country}, '_id name country stateProvince')

      return universityList
    }catch(err){
      throw("Something went wrong")
    }
  }

  async find(id: string){
    try{
      const result = await UniversityModel.findById(id)
  
      return result
    }catch{
      throw new Error("Invalid ID")
    }
  }

  async create( {alpha_two_code, web_pages, name, country, domains, stateProvince} ){
    try{
      const result = await UniversityModel.create(
        { 
          alphaTwoCode: alpha_two_code,
          webPages: web_pages, 
          name: name, 
          country: country, 
          domains: domains, 
          stateProvince: stateProvince
        }
      )
      return result
    }catch(err){
      throw new Error("Something went wrong")
    }
  }

  async update({id, web_pages, name, domains}: IUniversityParams){
    try{
      const a = await UniversityModel.updateOne(
        {id: id},
        {
          webPages: web_pages,
          name: name,
          domains: domains
        },
        {new: true}
      )
      const result = await UniversityModel.findById(id)
      return result
      
    }catch(err){
      throw new Error("Something went wrong")
    }
  }

  async delete(id: string){
    try{
      await UniversityModel.deleteOne({_id: id})

      return({message: "University deleted"}) 
    }catch{
      throw new Error("Invalid ID")
    }
  }

  parseCountryValue(countryParam: string){
    return countryParam.charAt(0).toUpperCase() + countryParam.slice(1)
  }
}

export { UniversitiesModel }