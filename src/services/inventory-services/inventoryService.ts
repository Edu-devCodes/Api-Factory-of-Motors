import { ListInventoryDTO } from "../../dto/inventory/list/ListinventoryDTO.js";
import { ListInventoryInput } from "../../dto/inventory/list/ListinventoryInput.js";
import { IListInventoryRepository, IListInventoryService } from "./inventoryServiceProtocols.js";

export class ListInventoryService implements IListInventoryService {

    constructor(private listInventoryRepository: IListInventoryRepository) {}

    async handle(listInventoryInput: ListInventoryInput): Promise<ListInventoryDTO[]> {
        const inventory = await this.listInventoryRepository.listInventory(listInventoryInput);

        return inventory;
    }

}