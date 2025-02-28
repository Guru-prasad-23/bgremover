import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/MongoDb.js";

//App config

const PORT = process.env.PORT || 4000;

const app = express();
await connectDB()
//Initialize Middlewares
app.use(express.json());
app.use(cors());

//API route

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(PORT, () => {
  console.log("Server running is Running on PORT", PORT);
});
