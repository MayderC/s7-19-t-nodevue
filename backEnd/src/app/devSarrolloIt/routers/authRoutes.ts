import { Router, type Request, type Response } from "express"

import { asyncHandler } from "../../shared/framework/asyncHandler"
import { CreateUserController } from "../controllers/user/CreateUserController"
import { CreateAuthController } from "../controllers/auth/AuthController"


const authRouter = Router()

authRouter.post(
  "/auth/register",
  asyncHandler(async (req: Request, res: Response) => {
    const createUserController = new CreateUserController()

    await createUserController.run(req, res)
  }),
)
authRouter.post(
  "/auth/login",
  asyncHandler(async (req: Request, res: Response) =>{
    const createAuthController = new CreateAuthController()

    await createAuthController.run(req,res)
  })
)

export { authRouter }
