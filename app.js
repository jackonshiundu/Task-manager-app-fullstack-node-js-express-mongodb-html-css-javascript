const express=require('express');
const app=express()
const tasks=require('./ruoutes/tasks')
const connectDb= require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/errorHandler')
//middleware
app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)



const port=process.env.PORT||3000

const start=async()=>{
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(port,console.log(`server is listening on port:${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
