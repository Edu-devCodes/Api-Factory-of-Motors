import { PartType, Rarity } from "../../../../generated/prisma/enums.js";
import { CreatePartInput, PartDTO } from "../../../dto/PartDTO.js";
import { AppError } from "../../../errors/appError.js";
import { ICreatedPartService, ICreatePartRepository } from "../protocolsService.js";
import { validateParts } from "../../../utils/validators/part/validadorPart.js";
import { Prisma } from "../../../../generated/prisma/client.js";
import { error } from "node:console";

export class CreatePartService implements ICreatedPartService {
    constructor(private createPartRepository: ICreatePartRepository) { }

    async handle(data: CreatePartInput): Promise<PartDTO> {

        // Validando raridade e tipo
        if (!Object.values(Rarity).includes(data.rarity)) {
            throw new AppError("Invalid Rarity", 400);
        };

        if (!Object.values(PartType).includes(data.type)) {
            throw new AppError("Invalid PartType", 400);
        }

        // Validar stats
        validateParts(data);

        try {

            const part = await this.createPartRepository.createPart(data);

            return part;


        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
                throw new AppError("A part with this name already exist", 409);
            }

        }

        throw error;

    }
}
