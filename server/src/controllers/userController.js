const user = require("../models/userModel")

const getUsers = (req,res)=>{
    res.status(200).send({
        message: 'All user Information returned.',
        userlist : user
    })
}

const getProfile = (req,res)=>{
    res.status(200).send({
        message: 'User Profile returned.',
       
    })
}


module.exports = {getUsers, getProfile}