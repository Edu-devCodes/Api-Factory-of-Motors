import { prisma } from "../../database/prisma.js";
import { User, AuthUserPassword } from "../../models/User.js";
import { IAuthUserRepositoy } from "../../services/auth-user/protocols.js";

export class PostgreeAuthRepository implements IAuthUserRepositoy {
    async findUser(parmams: User): Promise<AuthUserPassword | null> {
        const { name } = parmams;
        const user = await prisma.user.findUnique({ where: { name }})

        if(!user) return null;

        return {
            id: user.id,
            name: user.name,
            passwordUser: user.password
        }
   
    }
 
}