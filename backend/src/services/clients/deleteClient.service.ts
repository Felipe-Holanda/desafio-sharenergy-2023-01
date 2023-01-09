import Clients from "../../models/clients.model";

export default async function deleteClientService(id: string) {
    const client = await Clients.findOne({ _id: id })

    client.isActive = false;
    client.updatedAt = new Date();

    client.save();

    return client;
}