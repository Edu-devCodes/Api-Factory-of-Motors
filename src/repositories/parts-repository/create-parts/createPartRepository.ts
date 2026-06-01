import { prisma } from "../../../database/prisma.js";
import { CreatePartInput, PartDTO } from "../../../dto/PartDTO.js";
import { ICreatePartRepository } from "../../../services/parts-service/protocolsService.js";

export class CreatePartRepository implements ICreatePartRepository {
    async createPart(data: CreatePartInput): Promise<PartDTO> {
        const part = await prisma.part.create({
            data
        });

        return part;
    }
}