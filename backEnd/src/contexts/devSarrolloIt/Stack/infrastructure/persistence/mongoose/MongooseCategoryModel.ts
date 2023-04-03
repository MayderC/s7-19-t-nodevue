import { Schema, model } from "mongoose";
import { StackModel } from "../../../domain/estities/StackEntity";

const MongooseStackSchema = new Schema<StackModel>(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const MongooseStackModel = model<StackModel>("Stack", MongooseStackSchema);

export { MongooseStackModel };
