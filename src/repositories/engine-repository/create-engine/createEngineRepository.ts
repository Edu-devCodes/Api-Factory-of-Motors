import { prisma } from "../../../database/prisma.js";
import { CreateEngineInput, EngineDTO } from "../../../dto/CreateEngineDTO.js";
import { ICreateEngineRepository } from "../../../services/engine-service/create-engine/protocolsService.js";

export class CreateEngineRepository implements ICreateEngineRepository {
    async createEngine(data: CreateEngineInput): Promise<EngineDTO> {
        const engine = await prisma.engine.create({
            data
        })

        return engine;
    }
}