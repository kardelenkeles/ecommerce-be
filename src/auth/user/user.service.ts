import { Inject, Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { RoleEntity } from "../role/entity/role.entity";
import { AssignedRoles } from "../role/entity/assigned-roles.entity";

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
    return await this.userRepository.findOne({
      where: { username }
    });
  }

  async createUser(userData: any) {
    console.log(userData);
    const user = await UserEntity.create(userData);
    const defaultRole = await RoleEntity.findOne({ where: { name: 'user' } });
    if (defaultRole) {
      await AssignedRoles.create({ userId: user.id, roleId: defaultRole.id });
    }
    return user;
  }

  async deleteUser(id: string) {
    return this.userRepository.destroy({
      where: { id }
    });
  }


}
