import { prisma } from "../../database/prisma.js";
import { User, CreatedUserDTO,  UserResponse } from "../../models/User.js";
import { ICreateUserRepository } from "../../services/create-user/protocols.js";

export class PostgreeCreateUserRepository implements ICreateUserRepository {
    async createUser(newParams: CreatedUserDTO): Promise<UserResponse> {

        const { name, hashedPassword } = newParams;

        const user = await prisma.user.create({
            data: {
                name,
                password: hashedPassword
            }
        })

        return {
            name: user.name
        }
    }
}