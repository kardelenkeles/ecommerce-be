import { BelongsToMany, Column, DataType, Table, Unique } from "sequelize-typescript";
import { Model } from "sequelize-typescript";
import { Type } from "class-transformer";
import { RoleEntity } from "../role/entity/role.entity";
import { AssignedRoles } from "../role/entity/assigned-roles.entity";

@Table
export class UserEntity extends Model {

  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  id: string;

  @Unique
  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;

  @Type(() => RoleEntity)
  @BelongsToMany(() => RoleEntity, {
    through: () => AssignedRoles,
    foreignKey: 'userId',
    otherKey: 'roleId'
  })
  roles: RoleEntity[];

}
