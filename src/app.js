const express = require("express")
require('express-async-errors');
require("./db/connection.js")
const { routes } = require("./routes")
var cors = require('cors');
const app = express()

app.use(cors())
app.use(express.json())

app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error:err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: `Internal Server Error  ${err}`
    })
})

app.use(routes)



module.exports = { app }