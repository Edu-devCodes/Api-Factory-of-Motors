import express from "express";
import { AuthMiddware } from "../middlewares/authMiddware.js";
import { ListEnginesRepository } from "../repositories/engine-repository/list-engine/listEnginesRepository.js";
import { ListEnginesService } from "../services/engine-service/list-engine/listEnginesService.js";
import { ListEngineController } from "../controllers/engine-controller/list-engines/listEngineController.js";
import { CreateEngineRepository } from "../repositories/engine-repository/create-engine/createEngineRepository.js";
import { CreateEngineService } from "../services/engine-service/create-engine/createEngineService.js";
import { CreateEngineController } from "../controllers/engine-controller/create-engine/createEngineController.js";

const router = express.Router();

router.get("/engines", AuthMiddware, async (req, res) => {
    const listEnginesRepository = new ListEnginesRepository()
    const listEnginesService = new ListEnginesService(listEnginesRepository);
    const listEnginesController = new ListEngineController(listEnginesService);
    const {statusCode, body} = await listEnginesController.handle();

    res.status(statusCode).send(body);
});

router.post("/engines", AuthMiddware, async (req, res)=> {
    const createEngineRepository = new CreateEngineRepository()
    const createEngineService = new CreateEngineService(createEngineRepository);
    const createEngineController = new CreateEngineController(createEngineService);
    const {statusCode, body } = await createEngineController.handle({
        body: req.body,
        userId: req.userId
    })

    res.status(statusCode).send(body);

});

export default router;