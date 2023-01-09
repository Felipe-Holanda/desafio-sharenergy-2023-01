import Clients from "../../models/clients.model";

export default async function registerClientService(uuidOwner: string, data) {
    const client = await Clients.create({
        ...data,
        uuidOwner,
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true
    })

    client.save();

    return client;
}