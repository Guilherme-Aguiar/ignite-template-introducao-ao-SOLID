import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user.isAdmin) {
      throw new Error(`User ${user.name} does not have access to list!`);
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
