import { EnginePartDTO } from "./EnginePartDTO.js";

export interface EnginesDTO {
    id: string;
    name: string;
    
    parts?: EnginePartDTO[];

    createdAt?: Date;
}