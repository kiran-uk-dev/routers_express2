const express= require('express');
const app = express();

const orderRouter = require('./routes/orders');
const userRouter= require('./routes/user')
app.use('/orders', orderRouter);
app.use('/user', userRouter);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});