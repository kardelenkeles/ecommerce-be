import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { CardProductEntity } from "./cardProduct.entity";

@Table
export class CardEntity extends Model {

  @Column
  total: number;

  @Column
  quantity: number;

  @Column
  userId: number;

  @HasMany(() => CardProductEntity)
  cardProduct: CardProductEntity[];

}
