import { PartDTO } from "./PartDTO.js";

export interface EnginePartDTO {
    id: string;

    engineId: string;
    partId: string;

    parts?: PartDTO;
}