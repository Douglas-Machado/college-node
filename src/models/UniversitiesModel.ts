import { UniversityModel } from "./collections/country"

interface IUpdateUniversityParams {
  id: string,
  web_pages: Array<string>;
  name: string,
  domains: Array<String>;
}

interface INewUniversityParams {
  alpha_two_code: string;
  web_pages?: string;
  name: string;
  country: string; 
  domains: string; 
  stateProvince: string;
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

  async create( {alpha_two_code, web_pages, name, country, domains, stateProvince}: INewUniversityParams ){
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
    }catch{
      throw new Error("Something went wrong")
    }
  }

  async update({id, web_pages, name, domains}: IUpdateUniversityParams){
    if(!id || !web_pages  || !name || !domains) throw new Error("Invalid params")
    try{
      await UniversityModel.findOneAndUpdate(
        {_id: id},
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