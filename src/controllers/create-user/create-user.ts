import { User } from "../../models/User.js";
import { UserResponse } from "../../models/User.js";
import { ICreateUserService } from "../../services/create-user/protocols.js";
import { HttpRequest, HttpResponse } from "../protocols.js";
import { ICreateUserController } from "./protocols.js";
import { Prisma } from "../../../generated/prisma/client.js";

export class CreateUserController implements ICreateUserController {

    constructor(private createService: ICreateUserService) { }

    async handle(httpRequest: HttpRequest<User>): Promise<HttpResponse<UserResponse>> {
        try {
            const params = httpRequest.body;
            const requireFields = ["name", "password"];

            for (const field of requireFields) {
                if (!params?.[field as keyof User]) {
                    return {
                        statusCode: 400,
                        body: `Field ${field} is required`
                    }
                }
            }

            const name = params!.name;

            const isValidName = /^[a-z0-9._-]+$/.test(name);

            if (!isValidName) {
                return {
                    statusCode: 400,
                    body: "Name must contain only lowercase letters and no spaces"
                }
            }

            if (params!.password.length < 6) {
                return {
                    statusCode: 400,
                    body: "Password must contain at least 6 characters"
                }
            }


            const response = await this.createService.handle(params!);

            return {
                statusCode: 201,
                message: "User created successfully.",
                body: {
                    name: response.name
                }
            }


        } catch (error) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === "P2002"
            ) {
                return {
                    statusCode: 400,
                    body: "Name already exists"
                }
            }


            return {
                statusCode: 500,
                body: "Something went wrong"
            }
        }
    }
}