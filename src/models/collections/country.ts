import mongoose from "mongoose"

const CountrySchema = new mongoose.Schema({
  alpha_two_code: {type: String, required: true},
  domains: [String],
  country: {type: String, required: true},
  stateProvince: String,
  web_pages: [String],
  name: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
})

export const CountryModel = mongoose.model('countries', CountrySchema)
