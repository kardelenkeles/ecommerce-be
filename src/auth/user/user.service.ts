import { Inject, Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { RoleEntity } from "../role/entity/role.entity";
import { AssignedRoles } from "../role/entity/assigned-roles.entity";
import { hash } from "bcrypt";
import { CreateUserDto } from "../dto/createUser.dto";

@Injectable()

export class UserService {
  constructor(
    @Inject("USER_REPOSITORY")
    private userRepository: typeof UserEntity
  ) {
  }

  async getUsers() {
    return await this.userRepository.findAll();
  }

  async getUserByUsername(username: string) {
    return await this.userRepository.findOne<UserEntity>({
      where: { username }
    });
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {

    const hashedPassword = await hash(createUserDto.password, 10);

    try {
      const user = await UserEntity.create({
        username: createUserDto.username,
        email: createUserDto.email,
        password: hashedPassword,
      });

      const defaultRole = await RoleEntity.findOne({ where: { name: 'user' } });

      if (defaultRole) {
        await AssignedRoles.create({ userId: user.id, roleId: defaultRole.id });
      } else {

        throw new Error('Default role not found.');
      }

      return user;
    } catch (error) {

      throw new Error('User creation failed.');
    }
  }

  async deleteUser(id: string) {
    return this.userRepository.destroy({
      where: { id }
    });
  }


}
