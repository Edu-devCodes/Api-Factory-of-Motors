import { prisma } from "../../../database/prisma.js";
import { ListInventoryDTO } from "../../../dto/inventory/list/ListinventoryDTO.js";
import { ListInventoryInput } from "../../../dto/inventory/list/ListinventoryInput.js";
import { IListInventoryRepository } from "../../../services/inventory-services/inventoryServiceProtocols.js";

export class ListInventoryRepository implements IListInventoryRepository {
    async listInventory(listInventoryInput: ListInventoryInput): Promise<ListInventoryDTO[]> {
        const inventory = await prisma.userPart.findMany({
            where: {
                userId: listInventoryInput.userId
            }
        });

        return inventory;
        
    }
}