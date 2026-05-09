import { AuthResponseDTO, User, AuthUserPassword } from "../../models/User.js";

export interface IAuthUserService {
    handle(credentials: User): Promise<AuthResponseDTO>
}

export interface IAuthUserRepositoy {
    findUser(parmams: User ): Promise<AuthUserPassword | null>;
}