const express = require('express')
const app = express();


app.get('/test', (req, res)=>{
    res.status(200).send({
        "message": "welcome to server"
    })
})


app.listen(3001, ()=>{
    console.log(`server is running at http://localhost:3001 port`)
})