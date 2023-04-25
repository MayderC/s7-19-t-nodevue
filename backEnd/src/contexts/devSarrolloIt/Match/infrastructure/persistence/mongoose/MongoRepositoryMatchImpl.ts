import { MatchEntity } from "../../../domain/entities/MatchEntity";
import { MatchRepository } from "../../../domain/repository/MatchRepository";
import { MoongoseMatchModel } from "./MongooseMatchModel";
import {MongoosePublicationModel} from "../../../../Publication/infrastructure/persistence/mongoose/MongoosePublicationModel"

class MongoRepositoryMatchImpl implements MatchRepository{
    async create(match: MatchEntity): Promise<MatchEntity> {
        const newMatch = await MoongoseMatchModel.create(match);
        return newMatch
    }
    
    async findmatchbyuserid(userid: string): Promise<MatchEntity[]> {
        const matchresult = await MoongoseMatchModel.find({userid})

        return matchresult
    }

    async getAllRequestsOfProject(id: string): Promise<any[]> {
        const resultado = await MongoosePublicationModel.aggregate([
            // SELECT * FROM publication p INNER JOIN matches m ON (p.localfield = m.foreignField)
            // INNER JOIN users u ON (p.userId = u.id)
            // INNER JOIN roles r ON (u.roleID = r.id)
            // WHERE userId = ? 
            {
              $lookup: {
                from: "matches",
                localField: "id",
                foreignField: "publicationid",
                as: "solictudesParaElProyecto",
              },
            },
            { $unwind: "$solictudesParaElProyecto" },
            { $match: {userId: id}},
            {
              $lookup: {
                from: 'users',
                localField: 'solictudesParaElProyecto.userid',
                foreignField: 'id',
                as: 'usuarioQueSolicita',
              },
            },
            { $unwind: '$usuarioQueSolicita' },

            {
              $lookup: {
                from: 'roles',
                localField: 'usuarioQueSolicita.roleId',
                foreignField: 'id',
                as: 'rolesInfo',
              },
            },
            { $unwind: '$rolesInfo' },

          ])
        const matches = this.filter(resultado)
        return matches
    }

    private filter(data: any[]): any[] {
      return data.map((res) => ({
        usuarioSolicitante: {
          infoMatch: {
            id: res.solictudesParaElProyecto.id,
            status: res.solictudesParaElProyecto.status,
            solicitud: res.solictudesParaElProyecto.solicitud,
            publicacionSolicitada: {
              id: res.solictudesParaElProyecto.publicationid,
              title: res.title
            }
          },
          name: res.usuarioQueSolicita.name,
          email: res.usuarioQueSolicita.email,
          rol: {
            id: res.rolesInfo.id,
            name: res.rolesInfo.name
          }
        },
      }))
    }

}

export { MongoRepositoryMatchImpl }