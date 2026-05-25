import express from "express";
import { config } from "dotenv";
import authRoutes from "./routes/authRoutes.js"
import enginesRoutes from "./routes/engineRoutes.js";
config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/auth", authRoutes)
app.use("/", enginesRoutes);

app.listen(PORT, () => console.log(`Listen on port ${PORT}!`))