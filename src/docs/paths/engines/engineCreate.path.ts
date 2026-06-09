const engineCreatePath = {
    "/engines": {
        post: {
            tags: ["Engines"],
            summary: "Create an engine",

            security: [
                {
                    bearerAuth: []
                }
            ],

            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/EngineInput"
                        }
                    }
                }
            },
            responses: {
                400: {
                    description:
                        "Missing field name"
                },
                500: {
                    description:
                        "Internal server error"
                },
                201: {
                    description: 
                        "Engine created successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/EngineResponse"
                                }
                            }
                        }
                }
            }
        }
    }
}

export default engineCreatePath;