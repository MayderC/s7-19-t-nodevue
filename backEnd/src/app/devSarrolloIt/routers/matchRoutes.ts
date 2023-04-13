import { Request, Response, Router } from "express";
import { asyncHandler } from "../../shared/framework/asyncHandler";
import { CreateMatchController } from "../controllers/match/CreateMatchController";

const matchRouter = Router();

matchRouter.post(
    '/match',
    asyncHandler(async (req: Request, res: Response) =>{
        const createMatchcontroller = new CreateMatchController();

        await createMatchcontroller.run(req,res)
    })
)

export {matchRouter};