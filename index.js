const express = require("express")

const app = express()


// app.use((req, res) => {
//     console.log("We got a request!");

//     res.send("ini responsenya")
// })

app.get("/messi/:number/:shirt/:clothes", ( req, res) => {
    const { number, shirt, clothes } = req.params
    res.send( `browsing the ${number} number ${shirt} celana ${clothes}`)
})

app.get("/", (req, res) => {
    res.send("HomePge")
})

app.get("/messi", (req, res) => {
    res.send("messi")
})

app.get("/cr", (req, res) => {
    res.send("cr")
})

app.get("/*", (req, res) => {
    res.send("EMTPY")
})


app.listen(3000, () => {
    console.log("This is port 3000");
})

