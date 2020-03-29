//@ts-check
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
app.use(cors())

const INITIAL_SPEED = 0.23

let speed = 1 + INITIAL_SPEED / (3600*24)
let visitors = 0
let infected = 1

function calcInfected(days) {
    while (days > 0) {
        days--;
        infected *= 1 + INITIAL_SPEED
    }
}
calcInfected(30)

setInterval(() => {
    infected *= speed
}, 1000)

app.get('/count', (req, res) => {
    console.log(infected)
    res.send({
        infected: infected,
        visitors,
        chance: (speed - 1) * infected * (3600*24) / 9000000
    })
})

app.get('/visit', (req, res) => {
    visitors++;
    res.send({
        status: "ok"
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))