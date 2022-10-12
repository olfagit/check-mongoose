const express = require ('express')
const connectDB = require('./config/ConnectDB')
const user = require('./controllers/contact')

const app = express()

app.use(express.json())
app.use('/api/users' , route)

connectDB()

const port = 5000

app.listen(port, console.log("server is connected"))