import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.js";
import { config } from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import enginesRoutes from "./routes/engineRoutes.js";
import partRoutes from "./routes/partRoutes.js";
config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/auth", authRoutes)
app.use("/", enginesRoutes);
app.use("/", partRoutes);
app.use("/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => console.log(`Listen on port ${PORT}!`))