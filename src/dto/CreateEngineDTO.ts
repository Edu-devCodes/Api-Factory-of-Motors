export interface CreateEngineInput {
    userId: string;
    name: string;
}

export interface EngineDTO {
    id: string;
    userId: string
    name: string;
    createdAt: Date;
}