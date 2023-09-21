import { IsNotEmpty } from "class-validator";

export class ProductDto {

  @IsNotEmpty()
  productName: string;

  @IsNotEmpty()
  details: string;

  @IsNotEmpty()
  productImage: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  discount: number;

}

