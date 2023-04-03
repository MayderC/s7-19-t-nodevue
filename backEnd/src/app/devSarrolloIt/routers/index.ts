import { Router } from "express";
import { stackRouter } from "./stackRoutes";
import { roleRouter } from "./roleRoutes";
import { authRouter} from "./authRoutes";

const mainRouter = Router();
// add routes files
mainRouter.use(authRouter);
mainRouter.use(stackRouter);
mainRouter.use(roleRouter);

export { mainRouter };
