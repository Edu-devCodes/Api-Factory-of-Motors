import { CreateEngineInput, EngineDTO } from "../../../dto/CreateEngineDTO.js";
import { ICreateEngineService } from "../../../services/engine-service/create-engine/protocolsService.js";
import { HttpRequest, HttpResponse } from "../../protocols.js";
import { ICreateEngineController } from "./protocolsController.js";

export class CreateEngineController implements ICreateEngineController {
    constructor(private createEngineService: ICreateEngineService) {}

    async handle(httpRequest: HttpRequest<CreateEngineInput>): Promise<HttpResponse<EngineDTO>> {
        try {

            const data = httpRequest.body;

            if (!data?.name) {
                return {
                    statusCode: 400,
                    body: "Missing field name"
                }
            }

            const engine = await this.createEngineService.handle({
                ...data,
                userId: httpRequest.userId!
            })

            return {
                statusCode: 201,
                body: engine
            }



        } catch (error) {
            return {
                statusCode: 500,
                body: "Internal server error"
            }
        }
    }
}