import express from "express";
import { CreateUserController } from "../controllers/create-user/create-user.js";
import { CreateUserService } from "../services/create-user/create-user.js";
import { PostgreeCreateUserRepository } from "../repositories/create-user/create-userRepository.js";
import { BcryptHashProvider } from "../utils/Hashs/PasswordHash.js";
import { PostgreeAuthRepository } from "../repositories/auth-user/auth-user.js";
import { AuthUserService } from "../services/auth-user/auth-user.js";
import { AuthUserController } from "../controllers/auth-user/auth-user.js";

const router = express.Router()

router.post("/register", async (req, res) => {

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


router.post("/login", async (req, res) => {
    const authUserRepository = new PostgreeAuthRepository();
    const compareProvider = new BcryptHashProvider();
    const authUserService = new AuthUserService(authUserRepository, compareProvider);
    const authUserController = new AuthUserController(authUserService);
    const {statusCode, message, body} = await authUserController.handle({
        body: req.body
    });

    res.status(statusCode).send({
        message,
        body
    })
});


export default router;