import { User } from "../../models/User.js";
import { UserResponse } from "../../models/User.js";
import { ICreateUserService } from "../../services/create-user/protocols.js";
import { HttpRequest, HttpResponse } from "../protocols.js";
import { ICreateUserController } from "./protocols.js";

export class CreateUserController implements ICreateUserController {

    constructor (private createService: ICreateUserService) {}

    async handle(httpRequest: HttpRequest<User>): Promise<HttpResponse<UserResponse>> {
        try {
            const params = httpRequest.body;
            const requireFields = ["name", "password"];

            for (const field of requireFields) {
                if(!params?.[field as keyof User]) {
                    return {
                        statusCode: 400,
                        body: `Field ${field} is required`
                    }
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


        } catch {
            return {
                statusCode: 500,
                body: "Something went wrong"
            }
        }
    }
}