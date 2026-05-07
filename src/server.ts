import express, { json } from "express";
import { config } from "dotenv";
import { prisma } from "./database/prisma.js";
import authRoutes from "./routes/authRoutes.js"
config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/auth", authRoutes)

app.listen(PORT, () => console.log(`Listen on port ${PORT}!`))