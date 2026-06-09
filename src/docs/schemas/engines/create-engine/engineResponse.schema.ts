const engineResponseSchema = {
    type: "object",

    properties: {
        id: {
            type: "string",
            format: "uuid",
            description: "Unique identifier of the engine.",
            example: "7c88af30-0970-46e5-8bda-351e5357cec1"
        },

        userId: {
            type: "string",
            format: "uuid",
            description: "Unique identifier of the engine owner.",
            example: "e5d0cdcd-1758-4bef-8d8e-3f4f99948a28"
        },

        name: {
            type: "string",
            description: "Engine name.",
            example: "Engine super Mk500"
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
        "name",
        "createdAt"
    ]
};

export default engineResponseSchema;