import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


type TokenPayload = {
    id: string;
    iat: number;
    exp: number;
}

export function AuthMiddware(
    req: Request,
    res: Response,
    next: NextFunction
) {

    const secret = process.env.SECRET_TOKEN;

    if (!secret) {
        return res.status(500).json({ error: "Internal server error" })
    }

    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Token not provided" });
    }

    const [, token] = authorization.split(" ");

    try {
        const decoded = jwt.verify(token, secret)
        const { id } = decoded as TokenPayload;

        req.userId = id;
        next();

    } catch (error) {
        return res.status(401).json({ error: "Token Invalid" });
    }


}