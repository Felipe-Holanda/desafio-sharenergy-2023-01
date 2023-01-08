import { Request, Response } from 'express';

import listUserService from '../services/users/listUser.service';
import registerUser from '../services/users/registerUser.service';
import patchUser from '../services/users/patchUser.service';
import deleteUsers from '../services/users/deleteUsers.service';

export async function listUsersController(req: Request, res: Response): Promise<Response> {
    const { uuid } = req.body as { uuid: string };
    const users = await listUserService(uuid);
    return res.status(200).json(users);
}

export async function registerUserController(req: Request, res: Response): Promise<Response> {
    const { username, email, password } = req.body as { username: string, email: string; password: string };
    const user = await registerUser({ username, email, password });
    return res.status(201).json(user);
}

export async function patchUserController(req: Request, res: Response): Promise<Response> {
    const data = {
        uuid: req.body.uuid as string,
        username: req.body.username as string,
        email: req.body.email as string,
        password: req.body.password as string,
    }
    const user = await patchUser(data);
    return res.status(200).json(user);
}

export async function deleteUsersController(req: Request, res: Response): Promise<Response> {
    const { uuid } = req.body as { uuid: string };
    await deleteUsers(uuid);
    return res.status(204).json();
}