const engineListPath = {
    "/engines": {
        get: {
            tags: ["Engines"],
            summary: "List engines",


            security: [
                {
                    bearerAuth: []
                }
            ],

            responses: {
                500: {
                    description:
                        "Server internal error"
                },
                401: {
                    description: "Authentication failed. Token not provided or token invalid."
                },
                200: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/ListEngineResponseSchema"
                            }
                        }
                    }
                }
            }
        }
    }

}

export default engineListPath;