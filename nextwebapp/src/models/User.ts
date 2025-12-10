// models/User.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    image: string | null;
    github_id: string | null;
    github_user_name: string;
    github_url: string;
    location: string | null;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
    {
        name: String,
        email: { type: String, required: true, unique: true, index: true },
        image: String,
        github_id: { type: String, unique: true, sparse: true, index: true },
        github_user_name: { type: String, unique: true, sparse: true, index: true },
        github_url: { type: String, unique: true, sparse: true, index: true },
        location: String,
    },
    { timestamps: true }
);

const User: Model<IUser> =
    (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>("User", UserSchema);

export default User;
