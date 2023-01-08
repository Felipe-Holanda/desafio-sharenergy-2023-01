import User from "../../models/user.model";
import AppError from "../../error";
import { compare } from "bcryptjs";
import { Request, Response, NextFunction } from "express";

export default async function verifyLoginMiddleware(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
        const { username, password } = req.body as { username: string, password: string };

        const user = await User.findOne({ username });

        if (!user) throw new AppError("Username or password are incorrect", 401);

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) throw new AppError("Username or password are incorrect", 401);

        if (user.isActive === false) throw new AppError("Username or password are incorrect", 404)

        return next();

    } catch (err) {
        return res.status(err.status).json({ message: err.message });
    }
}
