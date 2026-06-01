import { CreatePartInput } from "../../../dto/PartDTO.js";
import { AppError } from "../../../errors/appError.js";

export function validateParts(data: CreatePartInput): void {

    if (data.name.trim().length < 6) {
        throw new AppError("Name must have at least 6 characters", 400);
    }

    if (data.rpm < 0 || data.rpm > 10000) {
        throw new AppError("The rpm value should be between 0 and 10000", 400);
    }

    if (data.torque < 0 || data.torque > 1000) {
        throw new AppError("The torque value should be between 0 and 1000", 400);
    }

    if (data.heat < 0 || data.heat > 500) {
        throw new AppError("The heat value should be between 0 and 500", 400);
    }

    if (data.cooling < 0 || data.cooling > 500) {
        throw new AppError("The cooling value should be between 0 and 500", 400);
    }

    if (data.stability < -100 || data.stability > 300) {
        throw new AppError("The stability value should be between -100 and 300", 400);
    }

    if (data.durability < 0 || data.durability > 100) {
        throw new AppError("The durability value should be between 0 and 100", 400);
    }

    if (data.weight < 0.1 || data.weight > 100) {
        throw new AppError("The weight value should be between 0.1 and 100", 400);
    }

    if (data.heatRes < 0 || data.heatRes > 100) {
        throw new AppError("The heat resistence value should be between 0 and 100", 400);
    }

}