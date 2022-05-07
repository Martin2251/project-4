import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";



// mongodb+srv://martincode:<password>@cluster0.bha2m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const app = express();

app.use(morgan("dev"));

app.use(express.json({limite: "30mb", extended:true}));
app.use(express.urlencoded({limite: "30mb", extended:true}));

const MONGODB_URL = "mongodb+srv://martincode:Portsmouth22@cluster0.bha2m.mongodb.net/tour_db?retryWrites=true&w=majority"

const port = 5000;

app.get("/", (req,res) => {
    res.send("hELLO EXPRESS");
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})