import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User | undefined {
    const selectedUser = this.usersRepository.findById(user_id);

    if (!selectedUser) {
      throw new Error(`Id ${user_id} not found`);
    }

    const updatedUser = this.usersRepository.turnAdmin(selectedUser);

    return updatedUser;
  }
}

export { TurnUserAdminUseCase };
