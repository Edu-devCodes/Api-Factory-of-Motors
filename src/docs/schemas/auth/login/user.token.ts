const userLoggedResponseSchema = {
    type: "object",

    properties: {
        token: {
            type: "string",
            description:
                "User token",
            example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        },

    },
    required: [
        "token",
    ]
}

export default userLoggedResponseSchema;