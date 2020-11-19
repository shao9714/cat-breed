const e = require("express");
const express = require("express");

const app = express();

const PORT = 3117;

app.get("/",(req,res) => {
    res.send("received!")
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT} `)
})


