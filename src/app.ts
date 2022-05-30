import dotenv from "dotenv"
dotenv.config()

import express from "express";
import cors from "cors"
import { routes } from "./routes";
import mongoose from "mongoose";

const app = express()

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('DB working')
    app.emit('ready')
  }).catch(err => {
    console.log(err.message)
  })


app.use(cors())
app.use(express.json())
app.use(routes)

export { app }