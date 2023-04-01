import { Request, Response, Router } from "express";
import { FindAllStackController } from "../controllers/stack/FindAllStackController";
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

stackRouter.get(
  "/stack",
  asyncHandler(async (req: Request, res: Response) => {
    const findAllStackController = new FindAllStackController();

    await findAllStackController.run(req, res);
  })
);

export { stackRouter };
