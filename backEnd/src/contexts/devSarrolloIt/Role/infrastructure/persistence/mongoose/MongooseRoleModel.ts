import { Schema, model } from "mongoose"
import { RoleModel } from "../../../domain/entities/RoleEntity"

const MongooseRoleSchema = new Schema<RoleModel>(
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
  },
)

const MongooseRoleModel = model<RoleModel>(
  "Role",
  MongooseRoleSchema,
)

export { MongooseRoleSchema }