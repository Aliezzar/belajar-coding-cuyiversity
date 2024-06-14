const express = require('express')
const app = express()
const port = 3000

// routes/URL/Endpoint utama kita method nya GET

app.get('/', (req, res) => {
    res.send("utama")
})
app.get('/hello', (req, res) => {
    res.send('hello world!')
})

app.listen(port, () => {
    console.log(`Example app lisrening on port ${port}`)
})