const express = require("express")
const mongoose = require("mongoose")
const Product = require("./models/product.model")
const route = require("./routes/product.route")
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/products", route)

app.get("/", (req, res) =>{
    res.send("Hello from Node API Server");
})

mongoose.connect("mongodb+srv://admin:jamon123@backenddb.euopwmw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log("Server is running on Port 3000");
    });
}).catch(() => {
    console.log("Connection failed!");
})