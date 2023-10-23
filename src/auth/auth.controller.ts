import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { LoginResponseDto } from "./dto/login-response.dto";
import { ApiOkResponse } from "@nestjs/swagger";
import { UserService } from "./user/user.service";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {
  }

  @Post("register")
  @ApiOkResponse({ type: LoginResponseDto })
  register(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.userService.createUser(createUserDto);
  }

  @Post("login")
  @ApiOkResponse({type: LoginResponseDto })
  login(@Body() userLoginDto: LoginDto): Promise<any> {
    return this.authService.login(userLoginDto);
  }

}
