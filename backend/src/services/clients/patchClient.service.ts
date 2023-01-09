import Clients from "../../models/clients.model";

export default async function patchClientService(id: string, data) {
    const client = await Clients.findOne({ _id: id })

    if (data.name) client.name = data.name;
    if (data.email) client.email = data.email;
    if (data.phone) client.phone = data.phone;
    if (data.cpf) client.cpf = data.cpf;
    if (data.address) client.address = data.address;

    client.updatedAt = new Date();

    client.save();

    return client;

}