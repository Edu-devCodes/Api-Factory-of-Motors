const userLoginSchema = {
    type: "object",

    properties: {
        name: {
            type: "string",
            description: "Enter your username",
            example: "eduardo_123"
        },
        password: {
            type: "string",
            description: "Enter your password",
            example: "password123"
        },
    },
    required: [
        "name",
        "password"
    ]
}

export default userLoginSchema;