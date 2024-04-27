const express = require('express')
const morgan = require('morgan')
const app = express();

app.use(morgan("dev"))

app.get('/test', (req, res)=>{
    res.status(200).send({
        "message": "welcome to server! "
    })
})
// app.post('/test',(req,res)=>{
//     res.status(200).send({
//         message: "post: api testing"
//     })
// })

// app.put('/test',(req,res)=>{
//     res.status(200).send({
//         message: "put: api testing"
//     })
// })


app.listen(3001, ()=>{
    console.log(`server is running at http://localhost:3001 port`)
})