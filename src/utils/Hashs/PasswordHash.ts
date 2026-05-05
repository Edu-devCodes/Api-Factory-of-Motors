import bcrypt from "bcrypt";
import { IHashProvider } from "./protocols.js";

export class BcryptHashProvider implements IHashProvider {
    hash(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }
}

