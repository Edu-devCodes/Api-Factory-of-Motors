const inventoryPartSchema = {
    type: "object",

    properties: {
        id: {
            type: "string",
            description: "Your inventory ID",
            example: "6349125a-ce85-43c0-96c1-73538a835esx"
        },
        userId: {
            type: "string",
            description: "Your user ID",
            example: "6349125a-ce85-43c0-96c1-73538a835eac"
        },
        partId: {
            type: "string",
            description: "Your part ID",
            example: "6349125a-ce85-43c0-96c1-73538a835eac"
        },
        quantity: {
            type: "number",
            desctiption: "Your piece quantity",
            example: "1"
        },
        createdAt: {
            type: "string",
            format: "date-time",
            description: "Date and time when the engine was created.",
            example: "2026-06-09T00:57:04.699Z"
        }

    },
    required: [
        "id",
        "userId",
        "partId",
        "quantity",
        "createdAt"
    ]
}

export default inventoryPartSchema;