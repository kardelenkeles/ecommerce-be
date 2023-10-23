
import { ApiProperty } from "@nestjs/swagger";
import { UserEntity } from "../user.entity";

export class UserDto {

  @ApiProperty()
  id: string;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;


  constructor(user: UserEntity) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
  }
}
