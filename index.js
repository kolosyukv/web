const express = require('express')
const path = require("path")
const fs = require("fs")
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(__dirname));

app.get('/form', (req, res) => {
    res.sendFile("task4.html", {root: path.join(__dirname)})
})

app.post('/form', (req, res) => {
    console.log(">>>>>>>>>>>", req.body)
    fs.appendFile("data.txt", JSON.stringify(req.body) + "\n", (err )=>{
        if(err) {
            res.status(500).send("User not added")
        } else {
            res.status(201).send("User added")
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
