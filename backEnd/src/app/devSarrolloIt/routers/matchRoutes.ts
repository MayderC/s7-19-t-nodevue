import { Request, Response, Router } from "express";
import { asyncHandler } from "../../shared/framework/asyncHandler";
import { CreateMatchController } from "../controllers/match/CreateMatchController";
import { FindMatchbyUserIdController } from "../controllers/match/FindMatchbyUserIdController";

const matchRouter = Router();

matchRouter.post(
    '/match',
    asyncHandler(async (req: Request, res: Response) =>{
        const createMatchcontroller = new CreateMatchController();

        await createMatchcontroller.run(req,res)
    })
)

matchRouter.get(
    '/match/:userid',
    asyncHandler(async (req: Request, res: Response)=> {
        const findMatchbyuseridcontroller = new FindMatchbyUserIdController();

        await findMatchbyuseridcontroller.run(req,res)

    })
)

export { matchRouter };