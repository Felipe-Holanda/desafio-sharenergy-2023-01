import User from "../../models/user.model";
import { IUser } from "../../interfaces";

export default async function listUserService(uuid): Promise<IUser[]> {
    const user = await User.find({ uuid });

    user[0].password = undefined;
    return user[0];
}