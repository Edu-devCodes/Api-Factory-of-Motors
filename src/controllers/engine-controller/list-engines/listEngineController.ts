import { EnginesDTO } from "../../../dto/EngineDTO.js";
import { IlistEngineService } from "../../../services/engine-service/list-engine/protocolsService.js";
import { HttpResponse } from "../../protocols.js";
import { IlistEnginesController } from "./protocolsController.js";
import { EngineListInput } from "../../../dto/EngineDTO.js";

export class ListEngineController implements IlistEnginesController {
    constructor(private listEnginesService: IlistEngineService) {}

    async handle(listEngineInput: EngineListInput): Promise<HttpResponse<EnginesDTO[]>> {
        try {

            const engines = await this.listEnginesService.handle(listEngineInput);

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