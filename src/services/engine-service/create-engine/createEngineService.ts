import { CreateEngineInput, EngineDTO } from "../../../dto/CreateEngineDTO.js";
import { ICreateEngineRepository, ICreateEngineService } from "./protocolsService.js";

export class CreateEngineService implements ICreateEngineService {
    constructor(private createEngineRepository: ICreateEngineRepository) {}

    async handle(data: CreateEngineInput): Promise<EngineDTO> {
        const engine = await this.createEngineRepository.createEngine(data);

        return engine;
    }
}