const partSchema = {

    type: "object",

    properties: {
        id: {
            type: "string",
            example: "part-123"
        },
        name: {
            type: "string",
            example: "Turbo Compressor"
        },
        type: {
            type: "string",
            example: "turbo"
        },
        rarity: {
            type: "string",
            example: "epic"
        },
        rpm: {
            type: "number",
            example: 9000
        },
        torque: {
            type: "number",
            example: 500
        },
        heat: {
            type: "number",
            example: 80
        },
        cooling: {
            type: "number",
            example: 60
        },
        stability: {
            type: "number",
            example: 70
        },
        durability: {
            type: "number",
            example: 90
        },
        weight: {
            type: "number",
            example: 15
        },
        heatRes: {
            type: "number",
            example: 85
        },
        createdAt: {
            type: "string",
            format: "date-time",
            example: "2026-06-09T01:16:07.929Z"
        }
    },
    required: [
        "id",
        "name",
        "type",
        "rarity",
        "rpm",
        "torque",
        "heat",
        "cooling",
        "stability",
        "durability",
        "weight",
        "heatRes",
        "createdAt"
    ]
}

export default partSchema;