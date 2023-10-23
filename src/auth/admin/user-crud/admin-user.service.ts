import { Inject, Injectable } from "@nestjs/common";
import { UserEntity } from "../../user/user.entity";
import { UpdateUserDto } from "./updateUser.dto";
import { AssignedRoles } from "../../role/entity/assigned-roles.entity";

@Injectable()
export class AdminUserService {

  constructor(
    @Inject("ADMIN_USER_REPOSITORY")
    private readonly userRepository: typeof UserEntity
  ) {
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll<UserEntity>({
      attributes: { exclude: ["password"] },
      include: [
        {
          association: "roles"
        }
      ]
    });
    return users;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {

    const existingUser = await this.userRepository.findByPk<UserEntity>(id);

    if (!existingUser) {
      throw new Error("User not found");
    }

    existingUser.username = updateUserDto.username || existingUser.username;
    existingUser.email = updateUserDto.email || existingUser.email;
    existingUser.password = updateUserDto.password || existingUser.password;

    if (updateUserDto.roles) {
      const assignedRoles = await AssignedRoles.findAll({ where: { userId: id } });
      await Promise.all(assignedRoles.map((role) => role.destroy()));

      await Promise.all(
        updateUserDto.roles.map(async (roleId) => {
          await AssignedRoles.create({ userId: String(id), roleId });
        })
      );
    }

    await existingUser.save();
    return existingUser;


  }


}
