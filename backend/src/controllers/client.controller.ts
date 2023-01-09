import { Request, Response } from 'express';

import listClientsService from '../services/clients/listClients.service';
import listTargetClientService from '../services/clients/listTargetClient.service';
import registerClientService from '../services/clients/registerClient.service';
import patchClientService from '../services/clients/patchClient.service';
import deleteClientService from '../services/clients/deleteClient.service';
import reactiveClientService from '../services/clients/reactiveClient.service';

export async function listClientsController(req: Request, res: Response): Promise<Response> {
    const { uuid } = req.body as { uuid: string }
    const clients = await listClientsService(uuid)
    return res.status(200).json(clients)
}

export async function listTargetClientController(req: Request, res: Response): Promise<Response> {
    const { uuid } = req.body as { uuid: string }
    const { id } = req.params as { id: string }
    const client = await listTargetClientService(uuid, id)
    return res.status(200).json(client)
}

export async function registerClientController(req: Request, res: Response): Promise<Response> {
    const { uuid } = req.body as { uuid: string }
    req.body.uuid = undefined;
    const client = await registerClientService(uuid, req.body)
    return res.status(201).json(client)
}

export async function patchClientController(req: Request, res: Response): Promise<Response> {
    req.body.uuid = undefined;
    const { id } = req.params as { id: string }
    const client = await patchClientService(id, req.body)
    return res.status(200).json(client)
}

export async function deleteClientController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params as { id: string }
    await deleteClientService(id)
    return res.status(204).json()
}

export async function reactiveClientController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params as { id: string }
    const client = await reactiveClientService(id)
    return res.status(202).json(client)
}