const enginePartSchema = {
    type: "object",

    properties: {
        id: {
            type: "string",
            description: "Your engine part ID",
            example: "6349125a-ce85-43c0-96c1-73538a835esx"
        },
        engineId: {
            type: "string",
            description: "Your engine ID",
            example: "6349125a-ce85-43c0-96c1-73538a835eac"
        },
        partId: {
            type: "string",
            description: "Your part ID",
            example: "6349125a-ce85-43c0-96c1-73538a835eac"
        },

        parts: {
            $ref: "#/components/schemas/Part"
        }
    },
    required: [
    "id",
    "engineId",
    "partId"
]
}

export default enginePartSchema;