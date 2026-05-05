import express from "express";
import { CreateUserController } from "../controllers/create-user/create-user.js";
import { CreateUserService } from "../services/create-user/create-user.js";
import { PostgreeCreateUserRepository } from "../repositories/create-user/create-userRepository.js";
import { BcryptHashProvider } from "../utils/Hashs/PasswordHash.js";

const router = express.Router()

// Criar usúario
router.post("/users", async (req, res) => {

    const createUserRepository = new PostgreeCreateUserRepository();
    const hashProvider = new BcryptHashProvider();
    const createService = new CreateUserService(createUserRepository,hashProvider)
    const createUserController = new CreateUserController(createService);
    const { statusCode, message, body } = await createUserController.handle({
        body: req.body
    });
    res.status(statusCode).send({
        message,
        body
    })
});



export default router;