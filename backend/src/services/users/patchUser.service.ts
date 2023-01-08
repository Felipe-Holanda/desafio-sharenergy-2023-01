import User from "../../models/user.model";
import { IUser } from "../../interfaces";
import { hash } from "bcryptjs";


export default async function patchUser(data): Promise<IUser> {
    const user = await User.findOne({ uuid: data.uuid });

    if (data.username) user.username = data.username;
    if (data.email) user.email = data.email;
    if (data.password) user.password = await hash(data.password, 10);
    if (data.isAdmin) user.isAdmin = data.isAdmin;

    user.updatedAt = new Date();
    await user.save();

    user.password = undefined;
    return user;
}