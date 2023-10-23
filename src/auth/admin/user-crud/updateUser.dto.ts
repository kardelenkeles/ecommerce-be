
import { IsArray, IsInt, IsNotEmpty, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { RoleEntity } from "../../role/entity/role.entity";

export class UpdateUserDto{

  @ApiProperty()
  @IsOptional()
  readonly username?: string;

  @ApiProperty()
  @IsOptional()
  readonly email?: string;

  @ApiProperty()
  @IsOptional()
  readonly password?: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  roles: number[];


}
