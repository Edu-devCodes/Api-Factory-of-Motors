const engineSchema = {
    type: "object",

    properties: {
        name: {
            type: "string",
            description: "Your engine name",
            example: "Engine super Mk500"
        }
    },
    required: [
        "name"
    ]
}

export default engineSchema;