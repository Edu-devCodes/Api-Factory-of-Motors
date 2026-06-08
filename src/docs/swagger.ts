// Responsabilidade: Apenas Montar o documento OpenApi, basicamente junta tudo!!!
import userSchema from "./schemas/auth/user.schema.js";
import userResponseSchema from "./schemas/auth/user.response.js";
import userMessageSchema from "./schemas/auth/user.message.js";
import authPaths from "./paths/auth.path.js";

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
        { name: "Auth",
                description: "Authentication endpoints"
         },
        { name: "Engines",
            description: "Engines endpoints"
         },
        { name: "Parts",
            description: "Parts endpoints"
         }
    ],

    components: {
        schemas: {
            User: userSchema,
            UserResponse: userResponseSchema,
            CreateUserResponse: userMessageSchema
        }
    },

    paths: {
        ...authPaths
    }

}

export default swaggerDocument;