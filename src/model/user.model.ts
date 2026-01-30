import mongoose, { Schema, type Model } from 'mongoose';

export interface UserDocument {
    name: string;
    username: string;
    email: string;
    password: string;
}

const userSchema = new Schema<UserDocument>(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true, lowercase: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const User: Model<UserDocument> =
    mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);

export default User;
