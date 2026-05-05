import { User, UserResponse } from "../../models/User.js";
import { ICreateUserRepository, ICreateUserService } from "./protocols.js"
import { IHashProvider } from "../../utils/Hashs/protocols.js";


export class CreateUserService implements ICreateUserService {

    constructor (
        private createUserRepository: ICreateUserRepository,
        private hashProvider: IHashProvider
    ) {}

    async handle(params: User): Promise<UserResponse> {

        const { name, password } = params;

        const hashedPassword = await this.hashProvider.hash(password);

        const newParams = {name, hashedPassword}

        
        return this.createUserRepository.createUser(newParams);
    }

}