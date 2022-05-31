import mongoose from "mongoose"

const UniversitySchema = new mongoose.Schema({
  alphaTwoCode: {type: String, required: true},
  domains: {
    type: [String], 
    validate: (value: Array<string>) => Array.isArray(value) && value.length > 0,
  },
  country: {type: String, required: true},
  stateProvince: String,
  webPages: {
    type: [String], 
    validate: (value: Array<string>) => Array.isArray(value) && value.length > 0,
  },
  name: {type: String, required: true, validate: [validate, "This university already exists"]},
  createdAt: {type: Date, default: Date.now}
})

async function validate(name:string) {
  const country = this.country
  const nameCount = await mongoose.models.universities.countDocuments({ name })
  const countryCount = await mongoose.models.universities.countDocuments({ country })

  if(nameCount && !countryCount) {
    return true
  } else if(!nameCount) {
    return true
  } else return false
}

export const UniversityModel = mongoose.model('universities', UniversitySchema)
