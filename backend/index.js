import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js"; // Import the PORT constant from the config.js file
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";
const app= express();

//Middle for parsing request body 
 

app.use(express.json());    
app.use(cors());

// app.use(
//     cors({
//         origin: "http://localhost:3000",
//        // credentials: true,
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         allowedHeaders: ["Content-Type"],
//     })
// )
app.get('/',(request, response)=>{
    console.log(request);
    return response.status(233).send('Hello World');
    });

 app.use('/books', bookRoute);
    mongoose
    .connect(mongoDBURL) 
    .then(() => {  
        console.log("Connected to the database!");
        app.listen(PORT , () =>{
            console.log(`Server is running on port ${PORT}`);
        });
        })
    .catch((error) => {
        console.log(error);
    });