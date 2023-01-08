import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '../../error';
import User from '../../models/user.model';
import 'dotenv/config'

export default async function verifyAuthMiddleware(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
        const token: string = req.headers.authorization?.split(' ')[1];

        if (!token) throw new AppError('Token not provided', 401);

        const { uuid } = await verify(token, process.env.SECRET_KEY)

        const user = await User.findOne({ where: { uuid } })

        if (!user) throw new AppError('Invalid token', 401);

        if (user.isActive === false) throw new AppError('User not found', 401);

        req.body.uuid = user.uuid;
        return next();

    } catch (err) {
        return res.status(err.status || 400).json({ message: err.message });
    }


}