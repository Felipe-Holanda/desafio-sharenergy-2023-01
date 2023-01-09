import Clients from "../../models/clients.model";

export default async function listClientsService(uuidOwner: string) {
    const clients = await Clients.find({ uuidOwner })
    return clients;
}