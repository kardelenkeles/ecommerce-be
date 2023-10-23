
import { ApiProperty } from "@nestjs/swagger";
import { UserDto } from "../user/dto/user.dto";
import { UserEntity } from "../user/user.entity";

export class LoginResponseDto extends UserDto {

  @ApiProperty()
  token: string;

  constructor(user: UserEntity, token: string) {
    super(user);
    this.token = token;
  }
}
