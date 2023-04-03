import { Router } from "express";
import { stackRouter } from "./stackRoutes";
import { roleRouter } from "./roleRoutes";

const mainRouter = Router();
// add routes files

mainRouter.use(stackRouter);
mainRouter.use(roleRouter);

export { mainRouter };
