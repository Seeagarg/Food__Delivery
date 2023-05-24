const express = require('express');
const ConnectToMongoose = require('./db');
const app = express();
const port = 5000;
const Route = require('./Routes/CreateUser')
const cors= require('cors');
const mongoDB = require('./db');
const DisplayData = require('./Routes/Display_data')
const order_Data = require('./Routes/OrderData')
ConnectToMongoose();

app.get('/',(req,res)=>{
    res.send("Hello World");
})

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin,X-requested-With,Content-Type,Accept"
//     );
//     next();
// })

app.use(cors());

app.use(express.json());
app.use('/api',Route);
app.use('/api',DisplayData);
app.use('/api',order_Data);


app.listen(port,()=>{
    console.log(`Our App listening on port ${port}`);
})