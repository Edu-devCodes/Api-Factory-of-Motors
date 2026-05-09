import bcrypt from "bcrypt";
import { IHashProvider } from "./protocols.js";
import { AuthUserPasswordDTO } from "../../models/User.js";

export class BcryptHashProvider implements IHashProvider {
    hash(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    compare(credentialsPassword: AuthUserPasswordDTO): Promise<boolean> {
        const { password, userPassword} = credentialsPassword;
        return bcrypt.compare(password, userPassword);
    }
}

