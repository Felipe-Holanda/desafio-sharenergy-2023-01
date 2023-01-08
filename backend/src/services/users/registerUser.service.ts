import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcryptjs';
import User from '../../models/user.model';
import { IUser } from '../../interfaces';

export default async function registerUser(data): Promise<IUser> {

    const user = new User({
        uuid: uuidv4(),
        username: data.username,
        email: data.email,
        password: await hash(data.password, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true,
        isAdmin: false
    })

    await user.save();

    user.password = undefined;
    return user;
}