import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8000;
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`🎉 server is listning on ${PORT}`);
        });
    })
    .catch((err) => console.log("DB connection faild :", err));
