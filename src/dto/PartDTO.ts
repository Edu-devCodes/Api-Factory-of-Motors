import { PartType, Rarity } from "../../generated/prisma/enums.js";

export interface CreatePartInput {
    name: string;

    type: PartType;
    rarity: Rarity;

    rpm: number;
    torque: number;
    heat: number;
    cooling: number;
    stability: number;
    durability: number;

    weight: number;
    heatRes: number;
}


export interface PartDTO {
    id: string;
    name: string;

    type: string;
    rarity: string;

    rpm: number;
    torque: number;
    heat: number;
    cooling: number;
    stability: number;
    durability: number;

    weight: number;
    heatRes: number;

    createdAt: Date;
}