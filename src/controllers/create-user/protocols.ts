import { User } from "../../models/User.js"
import { UserResponse } from "../../models/User.js";
import { HttpRequest, HttpResponse } from "../protocols.js";

export interface ICreateUserController {
    handle(httpRequest: HttpRequest<User>): Promise<HttpResponse<UserResponse>>;
}