import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    let user;

    try {
      user = this.createUserUseCase.execute({ name, email });
    } catch (err) {
      return response
        .status(400)
        .json({ error: `Email ${email} already exists` });
    }

    return response.status(201).json(user);
  }
}

export { CreateUserController };
