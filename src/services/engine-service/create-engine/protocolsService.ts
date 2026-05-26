import { EngineDTO, CreateEngineInput } from "../../../dto/CreateEngineDTO.js";

export interface ICreateEngineService {
    handle(data: CreateEngineInput): Promise<EngineDTO>;
}

export interface ICreateEngineRepository {
    createEngine(data: CreateEngineInput): Promise<EngineDTO>;
}