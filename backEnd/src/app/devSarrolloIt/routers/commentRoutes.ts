import { Request, Response, Router } from "express";
import { asyncHandler } from "../../shared/framework/asyncHandler";
import { CreateCommentController } from "../controllers/comment/CreateCommentController";
import { DeleteCommentController } from "../controllers/comment/DeleteCommentController";

const commentRouter = Router() ;

commentRouter.post(
    '/comment',
    asyncHandler( async (req: Request, res: Response) => {
        const createcommentcontroller = new CreateCommentController();

        await createcommentcontroller.run(req,res)
    })
)

commentRouter.delete(
    '/comment/:id',
    asyncHandler( async (req: Request, res: Response) => {
        const deletecommentcontroller = new DeleteCommentController();

        await deletecommentcontroller.run(req,res)
    })
)

export { commentRouter } ;