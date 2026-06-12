
const listEngineResponseSchema = {
    type: "array",

    items: {
        $ref: "#/components/schemas/ListEngineResponse"
    }
}

export default listEngineResponseSchema;