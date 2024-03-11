require('dotenv').config();
const express =  require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// require('notenv').config();
const app = express();

const userRouter = require('./Router/UserRouter.js');


// Middleware
app.use(express.static(path.resolve(_dirname,'dist')))
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/auth' , userRouter.router);



main().catch(err => console.log(err));

async function main(){
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Data base connected");

}

app.listen(process.env.PORT,()=>{
    console.log("server started");
})
