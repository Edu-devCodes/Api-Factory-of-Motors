import { EnginesDTO } from "../../../dto/EngineDTO.js";
import { EngineListInput } from "../../../dto/EngineDTO.js";

export interface IlistEngineService {
    handle(listEngineInput: EngineListInput): Promise<EnginesDTO[]>;
}

export interface IlistEngineRepository {
    listEngines(listEngineInput: EngineListInput): Promise<EnginesDTO[]>;
}