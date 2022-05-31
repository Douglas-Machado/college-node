import { CountryModel } from "./collections/country"

class UniversitiesModel{
  async listAll(countryParam = null) {
    try{
      if(!countryParam){
        const universityList = await CountryModel.find({}, '_id name country stateProvince')
        
        return(universityList)
      }
      const country = this.parseCountryValue(countryParam)
      const universityList = await CountryModel.find({country: country})

      return universityList
    }catch(err){
      throw("Something went wrong")
    }
  }

  async findUniversity(id: string){
    try{
      const result = await CountryModel.findById(id)
  
      return result
    }catch{
      throw new Error("Invalid ID")
    }
  }

  async deleteUniversity(id: string){
    try{
      await CountryModel.deleteOne({_id: id})

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