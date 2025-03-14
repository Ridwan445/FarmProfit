const express = require("express")
require("dotenv").config()
const cors = require("cors")
const connectDB = require("./src/config/db")
const port = process.env.PORT || 3000


const app = express()

app.use(express.json({limit: '10mb'})) 
app.use(cors())

connectDB()



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})