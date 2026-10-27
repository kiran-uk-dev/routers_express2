const express= require('express');
const route = express.Router();


route.get('/',(req,res)=>{
    res.send('User List');
});

route.post('/',(req,res)=>{
    res.send('User created');
});

module.exports = route;
