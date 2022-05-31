import mongoose from "mongoose"

const UniversitySchema = new mongoose.Schema({
  alphaTwoCode: {type: String, required: true},
  domains: [{type: String, required: true}],
  country: {type: String, required: true},
  stateProvince: String,
  webPages: [{type: String, required: true}],
  name: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
})

export const UniversityModel = mongoose.model('countries', UniversitySchema)
