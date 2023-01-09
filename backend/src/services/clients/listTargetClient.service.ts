import Clients from "../../models/clients.model";

export default async function listTargetClientService(uuidOwner: string, id: string) {
    const client = await Clients.findOne({ uuidOwner, _id: id })
    return client;
}