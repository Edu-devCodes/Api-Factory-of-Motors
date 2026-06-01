import { PartDTO, CreatePartInput } from "../../dto/PartDTO.js";

export interface ICreatedPartService {
    handle(data: CreatePartInput): Promise<PartDTO>;
}
export interface ICreatePartRepository {
    createPart(data: CreatePartInput): Promise<PartDTO>;
}