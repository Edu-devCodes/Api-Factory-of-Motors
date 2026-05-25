import { EnginesDTO } from "../../dto/EngineDTO.js";
import { IlistEngineService } from "../../services/engine-service/list-engine/protocolsService.js";
import { HttpResponse } from "../protocols.js";
import { IlistEnginesController } from "./protocolsController.js";

export class ListEngineController implements IlistEnginesController {
    constructor(private listEnginesService: IlistEngineService) {}

    async handle(): Promise<HttpResponse<EnginesDTO[]>> {
        try {

            const engines = await this.listEnginesService.handle();

            return {
                statusCode: 200,
                body: engines
            }

        } catch (error) {
            return {
                statusCode: 500,
                body: "Server internal error"
            }
        }
    }
}