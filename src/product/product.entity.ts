import { AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { CardProductEntity } from "../cart/cardProduct.entity";

@Table
export class ProductEntity extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  productName: string;

  @Column
  details: string;

  @Column
  category: string;

  @Column
  price: number;

  @Column
  discount: number;

  @HasMany(() => CardProductEntity)
  cardProduct: CardProductEntity[];

}
