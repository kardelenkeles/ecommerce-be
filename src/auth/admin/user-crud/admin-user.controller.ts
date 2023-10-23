import { Body, Controller, Get, Param, Put, UseGuards } from "@nestjs/common";
import { AdminUserService } from "./admin-user.service";
import { UpdateUserDto } from "./updateUser.dto";
import { UserDto } from "../../user/dto/user.dto";
import { AdminRoleGuard } from "../../guards/admin-role.guard";


@Controller('admin')
export class AdminUserController {
  constructor(private adminService: AdminUserService) {
  }

  @Get()
  @UseGuards(AdminRoleGuard)
  async getAllUsers() {
    return await this.adminService.getAllUsers();
  }

  @Put(':id')
  @UseGuards(AdminRoleGuard)
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto): Promise<UserDto> {
    return await this.adminService.update(id, updateUserDto);
  }
}
