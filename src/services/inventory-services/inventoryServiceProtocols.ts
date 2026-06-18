import { ListInventoryDTO } from "../../dto/inventory/list/ListinventoryDTO.js";
import { ListInventoryInput } from "../../dto/inventory/list/ListinventoryInput.js";

export interface IListInventoryService {
    handle(listInventoryInput: ListInventoryInput): Promise<ListInventoryDTO[]>; 
}

export interface IListInventoryRepository {
    listInventory(listInventoryInput: ListInventoryInput): Promise<ListInventoryDTO[]>; 
}