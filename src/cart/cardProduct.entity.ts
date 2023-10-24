import { BelongsTo, Column, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { ProductEntity } from "../product/product.entity";
import { CardEntity } from "./card.entity";

@Table
export class CardProductEntity extends Model {


  @ForeignKey(() => ProductEntity)
  @Column
  productId: number;

  @ForeignKey(() => CardEntity)
  @Column
  cardId: number;

  @HasOne(() => ProductEntity, {
    foreignKey: "id",
    sourceKey: "productId"
  })
  product: ProductEntity;

}
