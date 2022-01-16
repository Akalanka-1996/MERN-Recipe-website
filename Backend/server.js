const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const morgan = require('morgan')

const connectDB = require('./config/connection')

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'))

// db connection
connectDB()

// load routes

const recipeRouter = require('./routes/recipe')

app.use('/recipes', recipeRouter)

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
