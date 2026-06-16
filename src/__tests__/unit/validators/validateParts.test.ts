import { describe, expect, it } from "vitest";
import { validateParts } from "../../../utils/validators/part/validadorPart.js";
import { CreatePartInput } from "../../../dto/PartDTO.js";


const part: CreatePartInput = {
    name: "Turbo TZ1000",
    rarity: "COMMON",
    type: "TURBO",
    rpm: 10000,
    torque: 1000,
    heat: 500,
    cooling: 500,
    stability: 300,
    durability: 100,
    weight: 100,
    heatRes: 100
}

// Agrupa os testes
describe("Validate Parts", () => {

    it("should accept a valid part", () => {
        expect(() => validateParts(part)).not.toThrow()
    });

    describe("name validation", () => {

        it("should not accept a name fewer then 6 characters", () => {
            const invalidPart = {
                ...part,
                name: "Turbo"
            }

            expect(() => validateParts(invalidPart)).toThrow();
        });
    });

    describe("rpm validation", () => {

        it("should not accept a rpm below 0", () => {
            const invalidPart = {
                ...part,
                rpm: -1
            }

            expect(() => validateParts(invalidPart)).toThrow();
        });

        it("should not accept a rpm above 10000", () => {
            const invalidPart = {
                ...part,
                rpm: 10001
            }

            expect(() => validateParts(invalidPart)).toThrow();
        });

        it("should accept rpm equal to 0", () => {
            const validPart = {
                ...part,
                rpm: 0
            }

            expect(() => validateParts(validPart)).toThrow();
        });
    });

    describe("torque validation", () => {

        it("should not accept torque below 0", () => {
            const invalidPart = {
                ...part,
                torque: -1
            }

            expect(() => validateParts(invalidPart)).toThrow();
        });

        it("should accept torque equal to 0", () => {
            const validPart = {
                ...part,
                torque: 0
            }

            expect(() => validateParts(validPart)).not.toThrow();
        });

        it("should not accept toque greatest to 1000", () => {
            const invalidPart = {
                ...part,
                torque: 1001
            }

            expect(() => validateParts(invalidPart)).toThrow();
        });
    });

    describe("heat validation", () => {

        it("should not accept heat below 0", () => {
            const invalidPart = {
                ...part,
                heat: -1
            }

            expect(() => validateParts(invalidPart)).toThrow();
        });

        it("should accept heat equal to 0", () => {
            const validPart = {
                ...part,
                heat: 0
            }

            expect(() => validateParts(validPart)).not.toThrow();
        });

        it("should not accept heat greatest to 500", () => {
            const invalidPart = {
                ...part,
                heat: 501
            }

            expect(() => validateParts(invalidPart)).toThrow();
        });

    });

    describe("cooling validation", () => {

        it("should not accept cooling below 0", () => {
            const invalidPart = {
                ...part,
                cooling: -1
            }

            expect(() => validateParts(invalidPart)).toThrow();
        });

        it("should accept cooling equal to 0", () => {
            const validPart = {
                ...part,
                cooling: 0
            }

            expect(() => validateParts(validPart)).not.toThrow();
        });

        it("should not accept cooling greatest to 500", () => {
            const invalidPart = {
                ...part,
                cooling: 501
            }

            expect(() => validateParts(invalidPart)).toThrow();
        });
    });

    describe("stability validation", () => {

        it("should not accept stability below -100", () => {
            const invalidPart = {
                ...part,
                stability: -101
            }

            expect(() => validateParts(invalidPart)).toThrow();
        });

        it("should accept stability equal to -100", () => {
            const validPart = {
                ...part,
                stability: -100
            }

            expect(() => validateParts(validPart)).not.toThrow();
        });

        it("should not accept stability greatest 300", () => {
            const invalidPart = {
                ...part,
                stability: 301
            }

            expect(() => validateParts(invalidPart)).toThrow();
        });

    });

    describe("durability validation", () => {

        it("should not accept durability below 0", () => {
            const invalidPart = {
                ...part,
                durability: -1
            };

            expect(() => validateParts(invalidPart)).toThrow();
        });

        it("should accept durability equal to 0", () => {
            const validPart = {
                ...part,
                durability: 0
            };

            expect(() => validateParts(validPart)).not.toThrow();
        });

        it("should not accept durability above 100", () => {
            const invalidPart = {
                ...part,
                durability: 101
            };

            expect(() => validateParts(invalidPart)).toThrow();
        });

    });

    describe("weight validation", () => {

        it("should not accept weight below 0.1", () => {
            const invalidPart = {
                ...part,
                weight: 0
            };

            expect(() => validateParts(invalidPart)).toThrow();
        });

        it("should accept weight equal to 0.1", () => {
            const validPart = {
                ...part,
                weight: 0.1
            };

            expect(() => validateParts(validPart)).not.toThrow();
        });

        it("should not accept weight above 100", () => {
            const invalidPart = {
                ...part,
                weight: 101
            };

            expect(() => validateParts(invalidPart)).toThrow();
        });

    });

    describe("heat resistance validation", () => {

        it("should not accept heat resistance below 0", () => {
            const invalidPart = {
                ...part,
                heatRes: -1
            };

            expect(() => validateParts(invalidPart)).toThrow();
        });

        it("should accept heat resistance equal to 0", () => {
            const validPart = {
                ...part,
                heatRes: 0
            };

            expect(() => validateParts(validPart)).not.toThrow();
        });

        it("should not accept heat resistance above 100", () => {
            const invalidPart = {
                ...part,
                heatRes: 101
            };

            expect(() => validateParts(invalidPart)).toThrow();
        });

    });
});