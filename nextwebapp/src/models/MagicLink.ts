// Mongoose schema & model for magic links
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IMagicLink extends Document {
  tokenHash: string;
  email: string;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const MagicLinkSchema = new Schema<IMagicLink>(
  {
    tokenHash: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

export const MagicLink: Model<IMagicLink> =
  mongoose.models.MagicLink ||
  mongoose.model<IMagicLink>("MagicLink", MagicLinkSchema);
