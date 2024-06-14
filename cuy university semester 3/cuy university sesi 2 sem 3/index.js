const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// routes/URL/Endpoint utama kita method nya GET

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("utama")
})
app.get('/hello', (req, res) => {
    console.log({ urlParam: req.query })
    res.send('hello world!')
})

app.post('/login', (req, res) => {
    console.log({ requestFromOutside: req.body })
    const username = req.body.username
    if (username === usernameFromDbExist) {
        res.status(400).send("username tidak dapat digunakan")
    }
})

app.put("/username", (req, res) => {
    console.log({ updateData: req.body })
    res.send('update berhasil')
})

app.listen(port, () => {
    console.log(`Example app lisrening on port ${port}`)
})