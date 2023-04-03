import { Router, type Request, type Response } from "express"

import { asyncHandler } from "../../shared/framework/asyncHandler"
import { CreateUserController } from "../controllers/user/CreateUserController"


const authRouter = Router()

authRouter.post(
  "/auth/register",
  asyncHandler(async (req: Request, res: Response) => {
    const createUserController = new CreateUserController()

    await createUserController.run(req, res)
  }),
)

export { authRouter }
