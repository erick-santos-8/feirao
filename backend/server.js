import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/products", (req, res) =>{
    // res.send("Servidor funcionando!")
})

app.listen(5000, ()=>{
    connectDB();
    console.log("Servidor rodando na porta 5000.")           
})
