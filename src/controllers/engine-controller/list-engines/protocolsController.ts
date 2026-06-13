import { EnginesDTO } from "../../../dto/EngineDTO.js";
import { HttpResponse } from "../../protocols.js";
import { EngineListInput } from "../../../dto/EngineDTO.js";

export interface IlistEnginesController {
    handle(listEngineInput: EngineListInput): Promise<HttpResponse<EnginesDTO[]>>;
}