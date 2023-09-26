import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { CardProductEntity } from "./cardProduct.entity";

@Table
export class CardEntity extends Model {

  @HasMany(() => CardProductEntity)
  cardProduct: CardProductEntity[];

  @Column
  total: number;

  @Column
  quantity: number;


}
