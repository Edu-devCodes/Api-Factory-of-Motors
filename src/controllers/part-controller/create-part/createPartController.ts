import { CreatePartInput, PartDTO } from "../../../dto/PartDTO.js";
import { ICreatedPartService } from "../../../services/parts-service/protocolsService.js";
import { HttpRequest, HttpResponse } from "../../protocols.js";
import { ICreatePartController } from "./protocolsController.js";
import { AppError } from "../../../errors/appError.js";
import { Prisma } from "../../../../generated/prisma/client.js";

export class CreatePartController implements ICreatePartController {
    constructor(private createPartService: ICreatedPartService) { }

    async handle(httpRequest: HttpRequest<CreatePartInput>): Promise<HttpResponse<PartDTO>> {
        try {

            if (!httpRequest.body) {
                return {
                    statusCode: 400,
                    body: "Body is required"
                };
            }


            const requiredFields = [
                "name",
                "type",
                "rarity",
                "rpm",
                "torque",
                "heat",
                "cooling",
                "stability",
                "durability",
                "weight",
                "heatRes"
            ];

            for (const field of requiredFields) {
                if (httpRequest.body?.[field as keyof CreatePartInput] === undefined) {
                    return {
                        statusCode: 400,
                        body: `Field ${field} is required`
                    }
                }
            }

            const part = await this.createPartService.handle(httpRequest.body);

            return {
                statusCode: 201,
                body: part
            }

        } catch (error) {
            if (error instanceof AppError) {
                return {
                    statusCode: error.statusCode,
                    body: error.message
                }
            }


            return {
                statusCode: 500,
                body: "Server internal error"
            }
        }
    }
}