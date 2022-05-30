import dotenv from "dotenv"
dotenv.config()

import { ApiRequest } from "./api/ApiRequest";
import express from "express";
import cors from "cors"
import { routes } from "./routes";
import mongoose from "mongoose";

const app = express()

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    mongoose.connection.dropCollection('countries')
    const apiRequest = new ApiRequest()
    apiRequest.execute()
    console.log('DB working')
    app.emit('ready')
  }).catch(err => {
    console.log(err.message)
  })

app.use(cors())
app.use(express.json())
app.use(routes)

export { app }