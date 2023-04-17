import { Router } from "express";
import { stackRouter } from "./stackRoutes";
import { roleRouter } from "./roleRoutes";
import { authRouter} from "./authRoutes";
import { matchRouter } from "./matchRoutes";
import { publicationRouter } from "./publicationRoutes";

const mainRouter = Router();
// add routes files
mainRouter.use(authRouter);
mainRouter.use(stackRouter);
mainRouter.use(roleRouter);
mainRouter.use(matchRouter)
mainRouter.use(publicationRouter)

export { mainRouter };
