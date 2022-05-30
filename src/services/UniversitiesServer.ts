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

class UniversitiesService {
  async execute() {
    try{
      countriesUrl.map(async (urlParam: any) => {
        const response = await axios.get(urlParam)
        console.log({response: response.data} )
      })
    }catch(e){
      console.log(e)
    }
  }
}

export { UniversitiesService }