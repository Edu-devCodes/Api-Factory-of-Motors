import jwt from "jsonwebtoken";
import { User, AuthResponseDTO } from "../../models/User.js";
import { IHashProvider } from "../../utils/Hashs/protocols.js";
import { IAuthUserService, IAuthUserRepositoy } from "./protocols.js";
import { AppError } from "../../errors/appError.js";

export class AuthUserService implements IAuthUserService {
    constructor(private authUserRepository: IAuthUserRepositoy,
        private compareProvider: IHashProvider
    ) { }



    async handle(credentials: User): Promise<AuthResponseDTO> {

        const params = credentials;
        const user = await this.authUserRepository.findUser(params);

        if (!user) {
            throw new AppError("invalid credentials", 401);
        }

        const credentialsPassword = {
            password: params.password,
            userPassword: user.passwordUser
        }

        const isValid = await this.compareProvider.compare(credentialsPassword);

        if (!isValid) {
            throw new AppError("Invalid credentials", 401)
        }

        const secret = process.env.SECRET_TOKEN;
        if (!secret) {
            throw new AppError("Internal server error", 500);
        }

        const token = jwt.sign(
            {
                id: user.id,
            },
            secret,
            {
                expiresIn: "8d"
            }
        )

        return {
            token: token
        }

    }
}