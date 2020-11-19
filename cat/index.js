const express = require("express");

const app = express();

const PORT = 3117;

app.get("/",(req,res) => {
    res.sendFile('./home.html')
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT} `)
})


