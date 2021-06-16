const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose')


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('')
})
// general db user info: codecompuser, codecomp0903//
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/CodeComp", {
    useNewUrlParser: true,
    useFindAndModify: false
});


app.listen(port, () => {
    console.log(`CodeComp Server listening on https://localhost:${port}`)
})
