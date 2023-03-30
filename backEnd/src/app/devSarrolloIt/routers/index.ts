import { Router } from "express";
import { stackRouter } from "./stackRoutes";

const mainRouter = Router();
// add routes files

mainRouter.use(stackRouter);

export { mainRouter };
