import express from "express";
import { AuthMiddware } from "../middlewares/authMiddware.js";
import { CreatePartRepository } from "../repositories/parts-repository/create-parts/createPartRepository.js";
import { CreatePartService } from "../services/parts-service/create-parts/createPartsService.js";
import { CreatePartController } from "../controllers/part-controller/create-part/createPartController.js";
import { authAdminMiddleware } from "../middlewares/authAdminMiddleware.js";

const router = express.Router();


router.post("/parts", AuthMiddware, authAdminMiddleware, async (req, res) => {
    const createPartRepository = new CreatePartRepository();
    const createPartService = new CreatePartService(createPartRepository);
    const createPartController = new CreatePartController(createPartService);
    const {statusCode, body} = await createPartController.handle({
        body: req.body
    });

    res.status(statusCode).send(body);
});

export default router;