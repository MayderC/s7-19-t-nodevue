import { Router, type Request, type Response } from "express"
import { asyncHandler } from "../../shared/framework/asyncHandler"
import { PublicationFindAllController } from "../controllers/publication/publicationFindAllController"
import { PublicationDeleteController } from "../controllers/publication/publicationDeleteController"

const publicationRouter = Router()

publicationRouter.get(
    "/publications",
    asyncHandler(async (req: Request, res: Response) => {
        const publicationFindAllController = new PublicationFindAllController()
        await publicationFindAllController.run(req, res)
    })
)

publicationRouter.delete(
    "/publications/:id",
    asyncHandler(async (req: Request, res: Response) => {
        console.log('hola')
        const deletePublicationController = new PublicationDeleteController()
        await deletePublicationController.run(req, res)
    })
)

export { publicationRouter }