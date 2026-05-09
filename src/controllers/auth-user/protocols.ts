import { User } from "../../models/User.js";
import { AuthResponseDTO } from "../../models/User.js";
import { HttpRequest, HttpResponse } from "../protocols.js";

export interface IAuthUserController {
    handle(httpRequest: HttpRequest<User>): Promise<HttpResponse<AuthResponseDTO>>
}