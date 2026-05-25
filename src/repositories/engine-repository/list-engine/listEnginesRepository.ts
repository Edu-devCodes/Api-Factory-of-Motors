import { prisma } from "../../../database/prisma.js";
import { EnginesDTO } from "../../../dto/EngineDTO.js";
import { IlistEngineRepository } from "../../../services/engine-service/list-engine/protocolsService.js";

export class ListEnginesRepository implements IlistEngineRepository {
    async listEngines(): Promise<EnginesDTO[]> {
        const engines = await prisma.engine.findMany({
            include: {
                parts: {
                    include: {
                        part: true
                    }
                }
            }
        });
        
        return engines;
    }
}