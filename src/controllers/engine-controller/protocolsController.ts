import { EnginesDTO } from "../../dto/EngineDTO.js";
import { HttpResponse } from "../protocols.js";

export interface IlistEnginesController {
    handle(): Promise<HttpResponse<EnginesDTO[]>>;
}