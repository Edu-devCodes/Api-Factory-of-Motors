import { User, CreatedUserDTO, UserResponse } from "../../models/User.js"

export interface ICreateUserService {
    handle(params: User): Promise<UserResponse>;
}

export interface ICreateUserRepository {
    createUser(newParams: CreatedUserDTO): Promise<UserResponse>;
}