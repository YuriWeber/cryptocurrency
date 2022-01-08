const express = require("express");
const cors = require('cors')

const port = 3001
const app = express()

app.use(cors())


app.listen(port, () => {
    console.log("Porta: "+port)
})