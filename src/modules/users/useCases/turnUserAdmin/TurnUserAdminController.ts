import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    let updatedUser;

    try {
      updatedUser = this.turnUserAdminUseCase.execute({ user_id });
    } catch (err) {
      return response.status(404).json({ error: err });
    }

    return response.status(201).json(updatedUser);
  }
}

export { TurnUserAdminController };
