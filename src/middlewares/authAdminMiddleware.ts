import { Request, Response, NextFunction } from "express";
import { prisma } from "../database/prisma.js";

export async function  authAdminMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {

    if (!req.userId) {
        return res.status(401).json({error: "User id not provide"})
    }

    const user = await prisma.user.findUnique({
        where: {id: req.userId}
    });


    if(user?.role !== "admin") {
        return res.status(403).json({error: "Access denied. Administrator privileges required"});
    }

    next();

};