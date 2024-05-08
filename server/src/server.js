// const express = require('express')
// const morgan = require('morgan')
// const bodyParser = require('body-parser')//third party middleware
// const app = express();

// app.use(morgan("dev"))

// //express build-in middleware
// // https://expressjs.com/en/guide/using-middleware.html#middleware.built-in
// // app.use(express.json()); //req body json niye kaj korar jonno express.json() use korlam
// // app.use(express.urlencoded({ extended: true}))//req body te form type data niye kaj korte express.urlencoded use korlam

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}))

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

// // app.post('/test',(req,res)=>{
// //     res.status(200).send({
// //         message: "post: api testing"
// //     })
// // })

// // app.put('/test',(req,res)=>{
// //     res.status(200).send({
// //         message: "put: api testing"
// //     })
// // })


// //Client Error handling
// app.use((req,res,next)=>{
//     res.status(404).send({
//         message: 'Routes not found.'

//     })

// })

// //Server Error handling
// app.use((err,req,res,next)=>{
//     console.error(err.stack);
//     res.status(404).json(
//         'Something broke'
//     )
// })



const app = require('./app');


app.listen(3001, ()=>{
    console.log(`server is running at http://localhost:3001 port`)
})