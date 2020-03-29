//@ts-check
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
app.use(cors())
let infected = 500
let speed = 1 + 0.23 / (3600*24)

setInterval(() => {
    infected *= speed
}, 1000)
app.get('/count', (req, res) => {
    res.send({
        infected: infected
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))