import { app } from "./app"

app.on('ready', () => {
  app.listen(4000, () => {
    console.log("Server is running on port 4000 🚀")
  })
})