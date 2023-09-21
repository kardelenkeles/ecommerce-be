import { Column, Model, Table } from "sequelize-typescript";
@Table
export class ProductEntity extends Model {

  @Column
  productName: string;

  @Column
  details: string;

  @Column
  productImage: string;

  @Column
  price: number;

  @Column
  discount: number;

  @Column
  lastUpdate: Date;


}
