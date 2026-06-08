// Responsabilidade: Documentar endpoint de autenticaçáo.
const authLoginPath = {
    "/auth/login": {
        post: {
            tags: ["Auth"],
            summary: "Log in with your username and password..",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/UserInputLogged"
                        }
                    }
                }
            },
            responses: {
                400: {
                    description:
                        "Validation error."
                },
                401: {
                    description:
                        "Invalid credentials."
                },
                500: {
                    description:
                        "Internal server error."
                },
                200: {
                    description:
                        "User logged in successfully",

                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/UserLoggedMessage",
                            }
                        }
                    }
                }
            }
        },
    }
}

export default authLoginPath;