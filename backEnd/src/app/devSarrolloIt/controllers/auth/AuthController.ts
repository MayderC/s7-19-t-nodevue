import type { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { CreateAuthUseCase } from "../../../../contexts/devSarrolloIt/auth/application/CreateAuthUseCase";
import { AuthRepository } from "../../../../contexts/devSarrolloIt/auth/domain/repositories/AuthRepository";
import { MongooseAuthRepository } from "../../../../contexts/devSarrolloIt/auth/infrastructure/persistence/mongoose/MongooseAuthRepository";
import { AuthValueObject } from "../../../../contexts/devSarrolloIt/auth/domain/valueObjects/AuthValueObject";
import { HttpCode } from "../../../shared/HttpCode";


class CreateAuthController {

    private readonly authRepository: AuthRepository
    private readonly authCreator: CreateAuthUseCase

    constructor() {
        this.authRepository = new MongooseAuthRepository()
        this.authCreator = new CreateAuthUseCase(this.authRepository)
    }

    async run(req: Request, res: Response): Promise<void> {
        const fields = req.body as { [key: string]: unknown }
        const { email, password } = fields

        if (typeof email !== "string" || typeof password !== "string") {
            throw new Error
        }

        const log = new AuthValueObject(email, password)

        const user = await this.authCreator.run(log)

        const token = jwt.sign(
            { id: user.id, roles: user.roleId },
            process.env.JWT_PASS,
            {
                expiresIn: "1h",
            },
        )

        const data = { id: user.id, email: user.email, roles: user.roleId, stacks: user.stackId }
        res.status(HttpCode.Created).send({
            user: data,
            token: token,
        })
    }
}

export { CreateAuthController }