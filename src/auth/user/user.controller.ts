import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";
import { AuthGuard } from "../guards/auth.guard";

@Controller("user")
// @UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  async getUser() {
    return await this.userService.getUsers();
  }

  @Delete(":id")
  async deleteUser(@Param("id") id: string) {
    return await this.userService.deleteUser(id);
  }


}
