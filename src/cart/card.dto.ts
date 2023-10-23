import { IsNotEmpty } from "class-validator";

export class CardDto{

  @IsNotEmpty()
  total: number;

  @IsNotEmpty()
  quantity: number;

  productIds: number[];

}
