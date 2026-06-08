const userLoggedMessageSchema = {
    type: "object",

    properties: {
        message: {
            type: "string",
            example: "User logged in successfully."
        },
        body: {
            $ref: "#/components/schemas/UserLoggedResponse"
        },
    },
    required: [
        "message",
        "body"
    ]
}

export default userLoggedMessageSchema;