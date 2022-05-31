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
  name: {type: String, required: true, validate: [validations, 'This university already exists']},
  createdAt: {type: Date, default: Date.now}
})

async function validations(name: string){
  const nameCount = await mongoose.models.universities.countDocuments({ name })
  return !nameCount
}

export const UniversityModel = mongoose.model('universities', UniversitySchema)
