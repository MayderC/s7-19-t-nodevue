import { Request, Response, Router } from "express";
import { asyncHandler } from "../../shared/framework/asyncHandler";
import { CreateCommentController } from "../controllers/comment/CreateCommentController";

const commentRouter = Router() ;

commentRouter.post(
    '/comment',
    asyncHandler( async (req: Request, res: Response) => {
        const createcommentcontroller = new CreateCommentController();

        await createcommentcontroller.run(req,res)
    })
)

export { commentRouter } ;