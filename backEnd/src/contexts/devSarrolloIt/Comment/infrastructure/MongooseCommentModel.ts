import { Schema, model } from "mongoose";
import { CommentEntity } from "../domain/entities/CommentEntity";


const MongooseCommentSchema = new Schema<CommentEntity>({
    id:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    publicationid:{
        type: String,
        required: true,
    },  
    userid:{
        type: String,
        required: true,
    },
},{
    timestamps: true,
  });

const MongooseCommentModel = model<CommentEntity>(
    "Comment",
    MongooseCommentSchema
);

export {MongooseCommentModel}