const express = require("express")

const app = express()

const connectDB = require("./config/database")
const usersRouter = require("./route/users")
const productsRouter = require("./route/products")

const cors = require("cors")

app.use(cors({
    origin: "*"
}))

app.use(express.json())

app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.get("/", (req, res) => {
    console.log("Api is running fine!")
    res.send("Hello")
})

app.listen(8000, async () => {
    try {
        await connectDB()
        console.log("Server is running at port 8000")
    }
    catch (err) {
        console.log(`Error in the server ${err}`)
    }
})