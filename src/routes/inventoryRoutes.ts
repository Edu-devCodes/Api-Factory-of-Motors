import express from "express";
import { AuthMiddware } from "../middlewares/authMiddware.js";
import { ListInventoryRepository } from "../repositories/inventory-repository/list-inventory/listInventoryRepository.js";
import { ListInventoryService } from "../services/inventory-services/inventoryService.js";
import { ListInventoryController } from "../controllers/inventory-controller/list-inventory/listInventoryController.js";


const router = express.Router();

router.get("/inventory", AuthMiddware, async (req, res) => {
    const listInventoryRespository = new ListInventoryRepository();
    const listInventoryService = new ListInventoryService(listInventoryRespository);
    const listInvetoryController = new ListInventoryController(listInventoryService);
    const {statusCode, body} = await listInvetoryController.handle({
        userId: req.userId
    });

    res.status(statusCode).send(body);
});

export default router;