import { CreatePartInput, PartDTO } from "../../../dto/PartDTO.js";
import { HttpRequest, HttpResponse } from "../../protocols.js";

export interface ICreatePartController {
    handle(httpRequest: HttpRequest<CreatePartInput>): Promise<HttpResponse<PartDTO>>;
}