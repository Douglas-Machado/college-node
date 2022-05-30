import { CountryModel } from "./collections/country"

class UniversitiesModel{
  async execute() {
    try{
      const countriesList = await CountryModel.find({}, '_id name country stateProvince')
      
        return(countriesList)
    }catch(e){
    }
  }
}

export { UniversitiesModel, CountryModel }