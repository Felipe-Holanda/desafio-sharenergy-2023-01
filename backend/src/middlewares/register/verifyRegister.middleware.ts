import User from "../../models/user.model";
import { Request, Response, NextFunction } from "express";
import AppError from "../../error";

export default async function verifyDuplicateMiddleware(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
        const { username, email } = req.body as { username: string, email: string };

        const user = await User.findOne({ username });
        if (user) throw new AppError("Username already taken", 409);

        const userEmail = await User.findOne({ email });
        if (userEmail) throw new AppError("Email already registered", 409);

        return next();
    } catch (err) {
        return res.status(err.status).json({ message: err.message });
    }
}