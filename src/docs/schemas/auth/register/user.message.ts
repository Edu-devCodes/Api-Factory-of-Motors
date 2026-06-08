const userMessageSchema = {
    type: "object",

    properties: {
        message: {
            type: "string",
            example: "User created successfully"
        },
        body: {
            $ref: "#/components/schemas/UserResponse"
        },
    },
    required: [
        "message",
        "user"
    ]
}

export default userMessageSchema;