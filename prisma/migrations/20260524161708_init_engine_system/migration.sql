/*
  Warnings:

  - You are about to drop the `Motor` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PartType" AS ENUM ('PISTON', 'CRANKSHAFT', 'TURBO', 'RADIATOR', 'CAMSHAFT', 'ECU', 'OIL_SYSTEM');

-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('COMMON', 'RARE', 'EPIC', 'LEGENDARY');

-- DropForeignKey
ALTER TABLE "Motor" DROP CONSTRAINT "Motor_userId_fkey";

-- DropTable
DROP TABLE "Motor";

-- CreateTable
CREATE TABLE "Engine" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Engine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnginePart" (
    "id" TEXT NOT NULL,
    "engineId" TEXT NOT NULL,
    "partId" TEXT NOT NULL,

    CONSTRAINT "EnginePart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Part" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "PartType" NOT NULL,
    "rarity" "Rarity" NOT NULL,
    "rpm" INTEGER NOT NULL,
    "torque" INTEGER NOT NULL,
    "heat" INTEGER NOT NULL,
    "cooling" INTEGER NOT NULL,
    "stability" INTEGER NOT NULL,
    "durability" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "heatRes" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Part_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Engine" ADD CONSTRAINT "Engine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnginePart" ADD CONSTRAINT "EnginePart_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnginePart" ADD CONSTRAINT "EnginePart_engineId_fkey" FOREIGN KEY ("engineId") REFERENCES "Engine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
