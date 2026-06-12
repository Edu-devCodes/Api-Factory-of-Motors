const listEngineResponse  = {
    type: "object",

    properties: {
        id: {
            type: "string",
            description: "Your engine ID",
            example: "6349125a-ce85-43c0-96c1-73538a835eac"
        },
        userId: {
            type: "string",
            description: "Your user ID",
            example: "6349125a-ce85-89vn-96c1-73538a835eac"
        },
        name: {
            type: "string",
            description: "string",
            example: "Engine Super MK100"
        },
        createdAt: {
            type: "string",
            format: "date-time",
            example: "2026-05-26T02:04:31.477Z"
        },
        parts: {
            type: "array",
            items: {
                $ref: "#/components/schemas/EnginePart"
            }
        },


    },
    required: [
        "id",
        "userId",
        "name",
        "parts",
    ]
}

export default listEngineResponse;