import { CreateEngineInput, EngineDTO } from "../../../dto/CreateEngineDTO.js";
import { HttpRequest, HttpResponse } from "../../protocols.js";

export interface ICreateEngineController {
    handle(httpRequest: HttpRequest<CreateEngineInput>): Promise<HttpResponse<EngineDTO>>;
}