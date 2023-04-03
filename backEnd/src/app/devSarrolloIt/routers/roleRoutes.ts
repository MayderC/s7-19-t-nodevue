import { Request, Response, Router } from "express";
import { asyncHandler } from "../../shared/framework/asyncHandler";
import { CreateRoleController } from "../controllers/role/CreateRoleController";

const roleRouter = Router() ;

roleRouter.post(
    '/role',
    asyncHandler(async (req: Request, res: Response) => {
        const createRoleController = new CreateRoleController() ;

        await createRoleController.run(req, res);
    })
)

export { roleRouter }