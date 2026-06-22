const inventoryPartPath = {
    "/inventory": {
        get: {
            tags: ["Inventory"],
            summary: "Inventory List",


            security: [
                {
                    bearerAuth: []
                }
            ],

            responses: {
                500: {
                    description:
                        "internal server error"
                },
                401: {
                    description: "Authentication failed. Token not provided or token invalid."
                },
                200: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/InventoryPartResponse"
                            }
                        }
                    }
                }
            }
        }
    }

}

export default inventoryPartPath;