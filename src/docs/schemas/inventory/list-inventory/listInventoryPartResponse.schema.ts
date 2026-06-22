const listInventoryPartResponseSchema = {
    type: "array",
    items: {
        $ref: "#/components/schemas/InventoryPart"
    }
};

export default listInventoryPartResponseSchema;