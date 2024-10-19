// npm install express cors dotenv nodemon form-data jsonwebtoken mongoose multer axios svix razorpay
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connecdDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'

const PORT=process.env.PORT||4000
const app=express()
await connecdDB();

//  initialize middleware
app.use(express.json())
app.use(cors())

//  api route
app.get('/',(req,res)=>res.send("API Working"))
app.use('/api/user/',userRouter)

app.listen(PORT,()=>console.log("Server running on port "+PORT))