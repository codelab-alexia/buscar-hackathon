import { Schema, Document, model } from 'mongoose';

export interface HackathonInterface extends Document {
  name: string;
  description: string;
  sponsor: string;
}

const hackathonSchema = new Schema(
  {
    name: String,
    description: String,
    sponsor: String,
  },
  {
    timestamps: true,
  }
);

const HackathonModel = model<HackathonInterface>('Hackathon', hackathonSchema);

export { HackathonModel };
