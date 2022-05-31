import { app } from "./app"

app.on('ready', () => {
  app.listen(process.env.PORT || 4000, () => {
    console.log("Server is running on port 4000 🚀")
  })
})