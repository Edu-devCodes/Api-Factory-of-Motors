import { EnginesDTO } from "../../../dto/EngineDTO.js";
import { IlistEngineRepository, IlistEngineService } from "./protocolsService.js";
import { EngineListInput } from "../../../dto/EngineDTO.js";

export class ListEnginesService implements IlistEngineService {
    constructor(private listEnginesRepository: IlistEngineRepository) {}

    async handle(listEngineInput: EngineListInput): Promise<EnginesDTO[]> {
        const engines = await this.listEnginesRepository.listEngines(listEngineInput);

        return engines;
    }
}