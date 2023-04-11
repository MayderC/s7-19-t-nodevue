import { Router, type Request, type Response } from "express"
import { asyncHandler } from "../../shared/framework/asyncHandler"
import { PublicationFindAllController } from "../controllers/publication/publicationFindAllController"

const publicationRouter = Router()

publicationRouter.get(
    "/publications",
    asyncHandler(async (req: Request, res: Response) => {
        const publicationFindAllController = new PublicationFindAllController()
        await publicationFindAllController.run(req, res)
    })
)