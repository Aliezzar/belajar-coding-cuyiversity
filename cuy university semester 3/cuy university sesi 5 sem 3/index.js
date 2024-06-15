const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connectiion')
const response = require("./response")

// routes/URL/Endpoint utama kita method nya GET

app.use(bodyParser.json())

app.get('/', (req, res) => {
    response(200, "lalala yeyeye hahahahhahahahahhahah", "ini message", res)
})

app.get('/mahasiswa', (req, res) => {
    response(200, "Mahasiswa Getlist", "ini messagenya", res)
})

app.get("/mahasiswa/:nim", (req, res) => {
    const nim = req.params.nim;
    response(200, `spesifik mahasiswa by id ${nim}`, "ini message", res)
})

app.post("/mahasiswa", (req, res) => {
    response(200, "ini posting", "ini message", res)
})

app.put("/mahasiswa", (req, res) => {
    response(200, "ini put atau update data", "ini message", res)
})

app.delete("/mahasiswa", (req, res) => {
    response(200, "INI DELETE DATA", "ini message", res)
})

app.listen(port, () => {
    console.log(`Example app lisrening on port ${port}`)
})