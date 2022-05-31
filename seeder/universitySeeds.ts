import dotenv from "dotenv"
dotenv.config()

import mongoose from "mongoose"
import { ApiRequest } from"../src/api/ApiRequest"

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(async () => {
    try{
    mongoose.connection.dropCollection('universities')
      const apiRequest = new ApiRequest()
      await apiRequest.execute()
    }catch(err){
       console.log(err)
    } 
}).finally(() => setTimeout(() => console.log("data is ready"), 7000))