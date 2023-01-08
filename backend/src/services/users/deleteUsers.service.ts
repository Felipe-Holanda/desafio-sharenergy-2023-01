import User from "../../models/user.model";

export default async function deleteUsers(uuid): Promise<void> {
    const user = await User.findOne({ uuid: uuid });

    user.isActive = false;
    user.updatedAt = new Date();

    await user.save();

    return;
}