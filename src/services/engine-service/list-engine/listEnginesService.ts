import { EnginesDTO } from "../../../dto/EngineDTO.js";
import { IlistEngineRepository, IlistEngineService } from "./protocolsService.js";

export class ListEnginesService implements IlistEngineService {
    constructor(private listEnginesRepository: IlistEngineRepository) {}

    async handle(): Promise<EnginesDTO[]> {
        const engines = await this.listEnginesRepository.listEngines();

        return engines;
    }
}