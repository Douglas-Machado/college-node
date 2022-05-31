import mongoose from "mongoose"

const CountrySchema = new mongoose.Schema({
  alphaTwoCode: {type: String, required: true},
  domains: [String],
  country: {type: String, required: true},
  stateProvince: String,
  webPages: [String],
  name: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
})

export const CountryModel = mongoose.model('countries', CountrySchema)
