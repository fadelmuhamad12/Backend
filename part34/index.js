const express = require('express')

const app = express()

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render("home.ejs")

})


app.listen(3034, ()=> {
    console.log("PORT 3034");
})