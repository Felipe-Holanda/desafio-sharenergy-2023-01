export interface IUser {
    uuid: String,
    username: String,
    email: String,
    password: String,
    createdAt: Date,
    updatedAt: Date,
    isActive: Boolean,
    isAdmin: Boolean
}