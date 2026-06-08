// Responsabilidade: Apenas Montar o documento OpenApi, basicamente junta tudo!!!
import userSchema from "./schemas/auth/register/user.schema.js";
import userResponseSchema from "./schemas/auth/register/user.response.js";
import userMessageSchema from "./schemas/auth/register/user.message.js";
import authPaths from "./paths/auth.path.js";

const swaggerDocument = {
    openapi: "3.1.1",
    info: {
        title: "Roguelike Engine API",
        version: "1.0.0",
        description: "RESTful API built with Node.js, TypeScript, PostgreSQL, and Prisma for engine simulation and management."
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