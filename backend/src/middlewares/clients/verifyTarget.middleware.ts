import { Request, Response, NextFunction } from 'express'
import Clients from '../../models/clients.model'
import AppError from '../../error'

export default async function verifyTargetClientMiddleware(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
        const { id } = req.params as { id: string }
        if (!id) throw new AppError('User not found', 404)

        const client = await Clients.findOne({ _id: id })
        if (!client) throw new AppError('User not found', 404)

        const { uuid } = req.body as { uuid: string }

        if (uuid !== client.uuidOwner) throw new AppError('User not found', 404)

        return next();

    } catch (err) {
        return res.status(err.status).json({ message: err.message })
    }
}