import { prisma } from "../../../database/prisma.js";
import { EnginesDTO } from "../../../dto/EngineDTO.js";
import { IlistEngineRepository } from "../../../services/engine-service/list-engine/protocolsService.js";
import { EngineListInput } from "../../../dto/EngineDTO.js";

// O usuario deve apenas conseguir listar seus motores, e não todos do db
export class ListEnginesRepository implements IlistEngineRepository {
    async listEngines(listEngineInput: EngineListInput): Promise<EnginesDTO[]> {
        const engines = await prisma.engine.findMany({
            where: {
                userId: listEngineInput.userId
            },
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