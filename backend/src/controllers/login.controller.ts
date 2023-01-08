import loginUser from "../services/login/loginUser.service";
import { Request, Response } from "express";

export default async function loginController(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body as { username: string; password: string };
    const token: string = await loginUser({ username, password });
    return res.status(200).json({ token });
}
