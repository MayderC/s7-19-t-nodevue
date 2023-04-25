import { Request, Response, Router } from "express";
import { asyncHandler } from "../../shared/framework/asyncHandler";
import { CreateRoleController } from "../controllers/role/CreateRoleController";
import { FindAllRoleController } from "../controllers/role/FindAllRoleController";

const roleRouter = Router() ;

roleRouter.post(
    '/role',
    asyncHandler(async (req: Request, res: Response) => {
        const createRoleController = new CreateRoleController() ;

        await createRoleController.run(req, res);
    })
)

roleRouter.get(
    '/role',
    asyncHandler(async (req: Request, res: Response)=>{
        const findallrolecontroller = new FindAllRoleController();

        await findallrolecontroller.run(req, res);
    })
)

export { roleRouter }