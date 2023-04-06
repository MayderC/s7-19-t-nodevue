import { Schema, model } from "mongoose";
import { PublicationModel } from "../../../domain/entities/PublicationEntity";

const MongoosePublicationSchema = new Schema<PublicationModel>({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  necessaryRoles: {
    type: [],
  },
  stacks: {
    type: [],
  },
  userId: {
    type: String,
    required: true,
  },
  matchId: {
    type: String,
    required: true,
  },
});

const MongoosePublicationModel = model<PublicationModel>(
  "Publication",
  MongoosePublicationSchema
);

export { MongoosePublicationModel };
