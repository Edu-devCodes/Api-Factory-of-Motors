import { ListInventoryDTO } from "../../../dto/inventory/list/ListinventoryDTO.js";
import { ListInventoryInput } from "../../../dto/inventory/list/ListinventoryInput.js";
import { IListInventoryService } from "../../../services/inventory-services/inventoryServiceProtocols.js";
import { HttpRequest, HttpResponse } from "../../protocols.js";
import { IListInventoryController } from "./inventoryControllerProtocols.js";

export class ListInventoryController implements IListInventoryController {
    constructor(private listInventoryService: IListInventoryService) { }

    async handle(httpRequest: HttpRequest<ListInventoryInput>): Promise<HttpResponse<ListInventoryDTO[]>> {
        try {
            const inventory = await this.listInventoryService.handle({
                userId: httpRequest.userId!
            });

            return {
                statusCode: 200,
                body: inventory
            }

        } catch (error) {
            return {
                statusCode: 500,
                body: "Internal error service"
            }
        }

    }
}