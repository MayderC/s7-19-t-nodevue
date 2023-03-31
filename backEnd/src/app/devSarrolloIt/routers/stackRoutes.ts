import { Request, Response, Router } from "express";
import { asyncHandler } from "../../shared/framework/asyncHandler";
import { CreateStackController } from "../controllers/stack/CreateStackController";

const stackRouter = Router();

stackRouter.post(
  "/stack",
  asyncHandler(async (req: Request, res: Response) => {
    const createStackController = new CreateStackController();

    await createStackController.run(req, res);
  })
);

export { stackRouter };
