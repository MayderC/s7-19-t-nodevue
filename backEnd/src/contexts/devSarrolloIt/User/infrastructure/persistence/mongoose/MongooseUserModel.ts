import { Schema, model } from "mongoose";
import { UserModel } from "../../../domain/entities/UserEntity";

const MongooseUserSchema = new Schema<UserModel>(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roleId: {
      type: String,
      required: true,
    },
    stackId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const MongooseUserModel = model<UserModel>("User", MongooseUserSchema);

export { MongooseUserModel };
