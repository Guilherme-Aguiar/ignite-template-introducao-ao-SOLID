import { validate } from "uuid";

import { UsersRepository } from "../../../modules/users/repositories/implementations/UsersRepository";

describe("UsersRepository", () => {
  let usersRepository: UsersRepository;

  beforeAll(() => {
    usersRepository = UsersRepository.getInstance();
  });

  it("should be able to create new users", () => {
    const user = usersRepository.create({
      name: "Vinicius Fraga",
      email: "vinifraga@rocketseat.com",
    });

    expect(user).toMatchObject({
      name: "Vinicius Fraga",
      email: "vinifraga@rocketseat.com",
      isAdmin: false,
    });
    expect(validate(user.id)).toBe(true);
    expect(user.createdAt).toBeInstanceOf(Date);
    expect(user.updatedAt).toBeInstanceOf(Date);
  });

  it("should be able to list all users", () => {
    const user = usersRepository.create({
      name: "Danilo Vieira",
      email: "danilo@rocketseat.com",
    });

    const users = usersRepository.list();

    expect(users).toStrictEqual(expect.arrayContaining([user]));
  });

  it("should be able to find user by ID", () => {
    const user = usersRepository.create({
      name: "Vinicius Fraga",
      email: "vinifraga@rocketseat.com",
    });

    const findUser = usersRepository.findById(user.id);

    expect(findUser).toMatchObject({
      name: user.name,
      email: user.email,
      isAdmin: false,
    });
    expect(validate(findUser.id)).toBe(true);
    expect(findUser.createdAt).toBeInstanceOf(Date);
    expect(findUser.updatedAt).toBeInstanceOf(Date);
  });

  it("should be able to find user by e-mail address", () => {
    const user = usersRepository.create({
      name: "Vinicius Fraga",
      email: "vinifraga@rocketseat.com",
    });

    const findUser = usersRepository.findByEmail(user.email);

    expect(findUser).toMatchObject({
      name: user.name,
      email: user.email,
      isAdmin: false,
    });
    expect(validate(findUser.id)).toBe(true);
    expect(findUser.createdAt).toBeInstanceOf(Date);
    expect(findUser.updatedAt).toBeInstanceOf(Date);
  });

  it("should be able to turn an user as isAdmin", () => {
    const user = usersRepository.create({
      name: "Vinicius Fraga",
      email: "vinifraga@rocketseat.com",
    });

    const isAdmin = usersRepository.turnAdmin(user);

    expect(isAdmin).toMatchObject({
      name: user.name,
      email: user.email,
      isAdmin: true,
    });
    expect(validate(isAdmin.id)).toBe(true);
    expect(isAdmin.createdAt).toBeInstanceOf(Date);
    expect(isAdmin.updatedAt).toBeInstanceOf(Date);
  });
});
