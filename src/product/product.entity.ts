import { Column, Model, Table } from "sequelize-typescript";

@Table
export class ProductEntity extends Model {

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


}
