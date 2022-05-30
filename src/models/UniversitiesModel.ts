import { CountryModel } from "./collections/country"

class UniversitiesModel{
  async listAll(countryParam = null) {
    const country = this.parseCountryValue(countryParam)
    try{
      if(!country){
        const universityList = await CountryModel.find({}, '_id name country stateProvince')
        
        return(universityList)
      }
      const universityList = await CountryModel.find({country: country})

      return universityList
    }catch(e){
    }
  }

  async findUniversity(id){
    const result = await CountryModel.findById(id)

    return result
  }

  parseCountryValue(countryParam: string){
    return countryParam.charAt(0).toUpperCase() + countryParam.slice(1)
  }
}

export { UniversitiesModel, CountryModel }