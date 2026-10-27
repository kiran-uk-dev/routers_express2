const express= require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    res.send('Order List');
});

route.post('/',(req,res)=>{
    res.send('Order created');
});

module.exports = route;
