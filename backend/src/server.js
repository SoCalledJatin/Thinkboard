import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesroutes from "./routes/notesroutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;



//middleware
app.use(cors({
    origin:"http://localhost:5173", // Replace with your frontend URL
}))

app.use(express.json());//this middleware is used to access the bodies of the json file(req.body) in controller.js. It basically calls the title and content from the json file.

app.use(rateLimiter);
//this is simple custom middleware
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} and url is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesroutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port", PORT);
    });
})
