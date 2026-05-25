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

    weight: number;
    heatRes: number;

    createdAt: Date;
}