const partCreatePath = {
    "/parts": {
        post: {
            tags: ["Parts"],
            summary: "Create an engine part",

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
                            $ref: "#/components/schemas/PartCreateInput"
                        }
                    }
                }
            },
            responses: {
                400: {
                    description:
                        "Missing fields"
                },
                409: {
                    description:
                        "A part with this name already exist"
                },
                201: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/PartCreatedResponse"
                            }
                        }
                    }

                },
                403: {
                    description:
                        "Access denied. Administrator privileges required"
                },
                401: {
                    description: "Authentication failed. Token not provided or token invalid."
                },
                500: {
                    description:
                        "Internal server error"
                }

            }
        }
    }
}

export default partCreatePath;