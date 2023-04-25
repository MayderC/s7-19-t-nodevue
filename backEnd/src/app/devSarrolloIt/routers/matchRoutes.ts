import { Request, Response, Router } from "express";
import { asyncHandler } from "../../shared/framework/asyncHandler";
import { CreateMatchController } from "../controllers/match/CreateMatchController";
import { FindMatchbyUserIdController } from "../controllers/match/FindMatchbyUserIdController";
import {ShowMatchsByProjectController  } from "../controllers/match/ShowMatchsController";

const matchRouter = Router();

matchRouter.post(
    '/match',
    asyncHandler(async (req: Request, res: Response) =>{
        const createMatchcontroller = new CreateMatchController();

        await createMatchcontroller.run(req,res)
    })
)

matchRouter.get(
    '/matchOfUser',
    asyncHandler(async (req: Request, res: Response)=> {
        const findMatchbyuseridcontroller = new FindMatchbyUserIdController();

        await findMatchbyuseridcontroller.run(req,res)

    })
)

matchRouter.get(
    '/matchsByProject',
    asyncHandler(async (req: Request, res: Response)=> {
        const findMatchbyuseridcontroller = new ShowMatchsByProjectController();

        await findMatchbyuseridcontroller.run(req,res)

    })
)

export { matchRouter };