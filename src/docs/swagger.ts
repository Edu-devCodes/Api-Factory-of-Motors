// Responsabilidade: Apenas Montar o documento OpenApi, basicamente junta tudo!!!
import userSchema from "./schemas/auth/register/user.schema.js";
import userResponseSchema from "./schemas/auth/register/user.response.js";
import userMessageSchema from "./schemas/auth/register/user.message.js";
import userLoginSchema from "./schemas/auth/login/user.schema.js";
import userLoggedMessageSchema from "./schemas/auth/login/userLoggedResponse..js";
import userLoggedResponseSchema from "./schemas/auth/login/user.token.js";
import authPaths from "./paths/auth/auth.path.register.js";
import authLoginPath from "./paths/auth/auth.path.login.js";
import bearerAuth from "./components/securitySchemes/bearerAuth.js";
import engineSchema from "./schemas/engines/create-engine/engine.schema.js";
import engineCreatePath from "./paths/engines/engineCreate.path.js";
import engineResponseSchema from "./schemas/engines/create-engine/engineResponse.schema.js";
import enginePartSchema from "./schemas/engines/list-engines/enginePart.schema.js";
import partSchema from "./schemas/engines/list-engines/part.schema.js";
import engineListPath from "./paths/engines/engineList.path.js";
import listengineResponseSchema from "./schemas/engines/list-engines/ListEngineResponse.js";
import listEngineResponse from "./schemas/engines/engineResponse.js";
import createPartInputSchema from "./schemas/parts/create-part/createPartInput.shema.js";
import createPartResponseSchema from "./schemas/parts/create-part/createPartResponse.shema.js"
import partCreatePath from "./paths/parts/partCreate.path.js";
import inventoryPartSchema from "./schemas/inventory/list-inventory/inventoryPart.schema.js";
import listInventoryPartResponseSchema from "./schemas/inventory/list-inventory/listInventoryPartResponse.schema.js";
import inventoryPartPath from "./paths/inventory/inventoryPart.path.js";


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
        {
            name: "Auth",
            description: "Authentication endpoints"
        },
        {
            name: "Engines",
            description: "Engines endpoints"
        },
        {
            name: "Parts",
            description: "Parts endpoints"
        },
        {
            name: "Inventory",
            description: "Inventory endpoints"
        }
    ],

    components: {
        schemas: {
            User: userSchema,
            UserResponse: userResponseSchema,
            CreateUserResponse: userMessageSchema,
            UserInputLogged: userLoginSchema,
            UserLoggedMessage: userLoggedMessageSchema,
            UserLoggedResponse: userLoggedResponseSchema,
            EngineInput: engineSchema,
            EngineResponse: engineResponseSchema,
            ListEngineResponseSchema: listengineResponseSchema,
            ListEngineResponse: listEngineResponse,
            EnginePart: enginePartSchema,
            Part: partSchema,
            PartCreateInput: createPartInputSchema,
            PartCreatedResponse: createPartResponseSchema,
            InventoryPart: inventoryPartSchema,
            InventoryPartResponse: listInventoryPartResponseSchema

        },
        securitySchemes: {
            bearerAuth: bearerAuth
        }
    },

    paths: {
        ...authPaths,
        ...authLoginPath,
        "/engines": {
            ...engineCreatePath["/engines"],
            ...engineListPath["/engines"]
        },
        "/parts": {
            ...partCreatePath["/parts"]
        },
        "/inventory": {
            ...inventoryPartPath["/inventory"]
        }
    }

}

export default swaggerDocument;