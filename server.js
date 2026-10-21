import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import router from './routes/studentRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {

    res.send("Student Data Managment API is Running");


});

app.use("/api/students", router)

const startServer = async () =>{

    try{

        await connectDB();

        const PORT = process.env.PORT || 3000

        app.listen(PORT, () => {

            console.log(`Server running on port ${PORT}`);
            
        })

    }catch(err){

        console.log(err);
        
    }
};

startServer();