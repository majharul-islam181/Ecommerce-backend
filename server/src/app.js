const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')//third party middleware
const createError = require('http-errors')
const xssClean = require('xss-clean')
const expressRouter = require('./routers/userRouter')
const rateLimit = require('express-rate-limit')

const app = express();

const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: "Too many request"
})


app.use(morgan("dev"))
app.use(xssClean())
app.use(rateLimiter)
app.use("/api/users/",expressRouter)

//express build-in middleware
// https://expressjs.com/en/guide/using-middleware.html#middleware.built-in
// app.use(express.json()); //req body json niye kaj korar jonno express.json() use korlam
// app.use(express.urlencoded({ extended: true}))//req body te form type data niye kaj korte express.urlencoded use korlam

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))


// const isLoggedIn = (req,res,next)=>{

//     const login = true;
//     if(login){
//         req.body.id = 101;
//         next();
//     }else{
//         return res.status(401).json({
//             message: "Please login first"
//         })
//     }
    
// }



// app.get('/test', (req, res)=>{
//     res.status(200).send({
//         "message": "welcome to server! "
//     })
// })

// app.get('/api/userProfile', isLoggedIn, (req,res)=>{
//     console.log(req.body.id)
//     res.status(200).send({
//         message: 'user profile is required',
//         userId: req.body.id,
//     })
// })

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


//Client Error handling
app.use((req,res,next)=>{
    // res.status(404).send({
    //     message: 'Routes not found.'

    // })
    // next();

    //using HttpErros
    createError(404,'no routes')
    next();

})

//Server Error handling==> all the error coming here
app.use((err,req,res,next)=>{
    // console.error(err.stack);
    // res.status(404).json(
    //     'Something broke'
    // )
    return res.status(err.status || 500).send({
        success : false,
        message : err.message,
    })
})

module.exports = app;