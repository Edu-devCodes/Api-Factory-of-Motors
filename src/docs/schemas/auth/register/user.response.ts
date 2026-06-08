const userResponseSchema = {
    type: "object",

    properties: {
        name: {
            type: "string",
            description:
                "Username response",
            example: "eduardo_123"
        },

    },
    required: [
        "name",
    ]
}

export default userResponseSchema;