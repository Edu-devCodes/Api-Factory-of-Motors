// Responsabilidade: Documentar endpoint de autenticaçáo.
const authRegisterPath = {
    "/auth/register": {
        post: {
            tags: ["Auth"],
            summary: "Register a new user.",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User"
                        }
                    }
                }
            },
            responses: {
                400: {
                    description:
                        "Validation error."
                },
                409: {
                    description:
                        "Name already exists"
                },
                500: {
                    description:
                        "Internal server error"
                },
                201: {
                    description:
                        "User created successfully",

                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/CreateUserResponse",
                            }
                        }
                    }
                }
            }
        },
    }
}

export default authRegisterPath;