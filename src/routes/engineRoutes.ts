import express from "express";
import { AuthMiddware } from "../middlewares/authMiddware.js";
import { ListEnginesRepository } from "../repositories/engine-repository/list-engine/listEnginesRepository.js";
import { ListEnginesService } from "../services/engine-service/list-engine/listEnginesService.js";
import { ListEngineController } from "../controllers/engine-controller/listEngineController.js";

const router = express.Router();

router.get("/engines", AuthMiddware, async (req, res) => {
    const listEnginesRepository = new ListEnginesRepository()
    const listEnginesService = new ListEnginesService(listEnginesRepository);
    const listEnginesController = new ListEngineController(listEnginesService);
    const {statusCode, body} = await listEnginesController.handle();

    res.status(statusCode).send(body);
});


export default router;