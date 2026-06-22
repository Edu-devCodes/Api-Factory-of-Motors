import { ListInventoryDTO } from "../../../dto/inventory/list/ListinventoryDTO.js";
import { ListInventoryInput } from "../../../dto/inventory/list/ListinventoryInput.js";
import { HttpRequest, HttpResponse } from "../../protocols.js";

export interface IListInventoryController {
    handle(httpRequest: HttpRequest<ListInventoryInput>): Promise<HttpResponse<ListInventoryDTO[]>>; 
}