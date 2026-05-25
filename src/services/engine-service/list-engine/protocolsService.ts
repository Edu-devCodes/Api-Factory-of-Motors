import { EnginesDTO } from "../../../dto/EngineDTO.js";

export interface IlistEngineService {
    handle(): Promise<EnginesDTO[]>;
}

export interface IlistEngineRepository {
    listEngines(): Promise<EnginesDTO[]>;
}