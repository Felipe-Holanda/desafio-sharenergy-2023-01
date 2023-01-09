import { Request, Response, NextFunction } from 'express';
import AppError from '../../error';

export const catMiddleware = (req: Request, res: Response, next: NextFunction) => {

    try {

        const { status } = req.params;

        if (status.length > 3) throw new AppError('Status is too long', 400);

        if (Number.isNaN(status)) throw new AppError('Status code can only be a number', 400);

        if (Number(status) < 100 || Number(status) > 599) throw new AppError('Status code must be between 100 and 599', 400);

        return next();

    } catch (err) {
        return res.status(err.status).json({ message: err.message });
    }
}