// Responsabilidade: Documentar endpoint de autenticaçáo.
import userSchema from "../schemas/user.schema.js"

const authPaths = {
    "/auth/register": {
        post: {
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
                        body: {
                            "name": "username"
                        }
                }
            }
        },
    }
}