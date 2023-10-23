import { Column, Model, Table, Unique } from "sequelize-typescript";

@Table
export class RoleEntity extends Model<RoleEntity>{

  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @Column
  name: string;


}
