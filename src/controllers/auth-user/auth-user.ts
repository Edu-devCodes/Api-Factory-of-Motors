import { User, AuthResponseDTO } from "../../models/User.js";
import { HttpRequest, HttpResponse } from "../protocols.js";
import { IAuthUserController } from "./protocols.js";
import { IAuthUserService } from "../../services/auth-user/protocols.js";
import { AppError } from "../../errors/appError.js";


export class AuthUserController implements IAuthUserController {
    constructor(private  authUserService: IAuthUserService ) {}

    async handle(httpRequest: HttpRequest<User>): Promise<HttpResponse<AuthResponseDTO>> {
         try {
            const params = httpRequest.body;
            const requiredFields = ["name", "password"];

            for (const field of requiredFields ) {
                if(!params?.[field as keyof User]) {
                    return {
                        statusCode: 400,
                        body: `Field ${field} is required`
                    }
                }
            }

            const token = await this.authUserService.handle(params!);
            return {
                statusCode: 200,
                message: "User logged in successfully",
                body: token
            }

         } catch (error) {
            if (error instanceof AppError) {
                return {
                    statusCode: error.statusCode,
                    body: error.message
                }
            }

            
            return {
                statusCode: 500,
                body: "Something went wrong"
            }
         }
    }

}