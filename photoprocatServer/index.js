require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express')
const PORT = process.env.PORT || 5000
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const router = require('./routs/index')
const fileUpload = require('express-fileupload')
const path = require('path');
const ApiErrorMiddleware = require('./middleWares/ApiErrorMiddleware');
const filepathMiddleWare = require('./middleWares/filepathMiddleWare');
app.use(express.json())
app.use(cookieParser())
app.use(cors(
    {credentials:true,
    origin:process.env.URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",}
))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use(filepathMiddleWare(path.resolve(__dirname,'files')))

app.use('/api',router)
app.use(ApiErrorMiddleware)
const start = async ()  =>{
    try {
        await mongoose.connect(`mongodb://${process.env.HOST}:${process.env.MONGO_PORT}/photoprocat`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(PORT,()=>console.log(`подключен к порту ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}


start(  )
