// Responsabilidade: Apenas Montar o documento OpenApi, basicamente junta tudo!!!
import userSchema from "./schemas/user.schema.js";


const swaggerDocument = {
    openapi: "3.1.1",
    info: {
        title: "Roguelike Engine API",
        version: "1.0.0",
        description: "API for managing, building, constructing, and simulating engines."
    },

    servers: [
        {
            url: "http://localhost:3000"
        }
    ],

    tags: [
        { name: "Auth" },
        { name: "Engines" },
        { name: "Parts" }
    ],

    components: {
        schemas: {
            User: userSchema
        }
    },

    paths: {}

}

export default swaggerDocument;