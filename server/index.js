import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";



// mongodb+srv://martincode:<password>@cluster0.bha2m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const app = express();

app.use(morgan("dev"));

app.use(express.json({limite: "30mb", extended:true}));
app.use(express.urlencoded({limite: "30mb", extended:true}));
app.use(cors());

const MONGODB_URL = "mongodb+srv://martincode:Portsmouth22@cluster0.bha2m.mongodb.net/tour_db?retryWrites=true&w=majority"

const port = 5000;

mongoose.connect(MONGODB_URL).then(() =>{
    app.listen(port, () =>
        console.log(`Server running on ${port}`)
    )
}).catch((error) => console.log(`${error} did not connect`))