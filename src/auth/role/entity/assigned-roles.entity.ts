import { BelongsTo, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserEntity } from "../../user/user.entity";

@Table
export class AssignedRoles extends Model<AssignedRoles>{
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @Column({
    type:  DataType.UUID
  })
  userId: string;

  @Column
  roleId: number;

}
