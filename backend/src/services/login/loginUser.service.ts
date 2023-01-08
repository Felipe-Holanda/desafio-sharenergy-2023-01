import jwt from 'jsonwebtoken';
import User from '../../models/user.model';

export default async function loginUser(data): Promise<string> {
    const user = await User.findOne({ username: data.username });
    console.log(user)
    let deadline = "4h"

    if (data.keepLoggedIn) deadline = "7d"

    const token = await jwt.sign(
        { uuid: user.uuid },
        process.env.SECRET_KEY,
        { expiresIn: deadline }
    )

    return token;
}
