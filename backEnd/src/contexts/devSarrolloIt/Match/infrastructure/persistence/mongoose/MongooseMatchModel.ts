import { Schema, model } from "mongoose";
import { MatchEntity } from "../../../domain/entities/MatchEntity";

const MongooseMatchSchema = new Schema<MatchEntity>({
    id:{
        type: String,
        required: true,
    },
    status:{
        type: Boolean,
        required: true,
        default: false
    },
    solicitud:{
        type: Boolean,
        required: true,
    },
    userid:{
        type: String,
        required: true,
    },
    publicationid:{
        type: String,
        required: true,
    },        

});

const MoongoseMatchModel = model<MatchEntity>(
    "Match",
    MongooseMatchSchema
);

export {MoongoseMatchModel}

