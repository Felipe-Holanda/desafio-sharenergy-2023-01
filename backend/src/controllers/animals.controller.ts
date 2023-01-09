import catService from "../services/animals/statusCat.service";
import dogService from "../services/animals/randomDog.service";
import { Request, Response } from "express";

export async function catController(req: Request, res: Response): Promise<Response> {
    const { status } = req.params;
    const response = await catService(status);
    return res.status(200).send(response.data);
}

export async function dogController(req: Request, res: Response): Promise<Response> {
    const response = await dogService();
    return res.status(200).send(response.data);
}