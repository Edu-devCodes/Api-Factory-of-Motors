import { AuthUserPasswordDTO } from "../../models/User.js";

export interface IHashProvider {
    hash(password: string): Promise<string>;
    compare(password: AuthUserPasswordDTO): Promise<boolean>;
}