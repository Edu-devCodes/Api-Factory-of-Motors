const userSchema = {
    type: "object",

    properties: {
        name: {
            type: "string",
            minLength: 6,
            pattern: "^[a-z0-9._-]+$",
            description:
                 "Unique username. Must contain at least 6 characters and may only include lowercase letters, numbers, dots (.), underscores (_) and hyphens (-).",
            example: "eduardo_123"
        },
        password: {
            type: "string",
            minLength: 6,
            description:
                "User's password. Must contain at least 6 characters or more.",
            example: "eduardo#78x"
        },
    },

    required: [
        "name",
        "password"
    ]

}

export default userSchema;