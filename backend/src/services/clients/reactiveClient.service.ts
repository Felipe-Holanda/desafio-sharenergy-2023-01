import Clients from "../../models/clients.model";

export default async function reactiveClientService(id: string) {
    const client = await Clients.findOne({ _id: id })

    client.isActive = true;

    client.save()

    return client;
}