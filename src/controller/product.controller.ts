import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put, Query
} from "@nestjs/common";
import { ProductEntity } from "../entity/product.entity";
import { ProductService } from "../service/product.service";
import { ProductDto } from "../entity/dto/product.dto";
import { UpdateProductDto } from "../entity/dto/updateProduct.dto";


@Controller("products")
export class ProductController {
  constructor(private service: ProductService) {
  }

  @Get()
  async getAll(@Query('category') category:string) {
    const products = await this.service.getAllProducts(category);
    return products;
  }

  @Get(":id")
  async getOne(@Param("id") id: string): Promise<ProductEntity> {
    const product = await this.service.getOneProduct(id);
    if (!product) {
      throw new NotFoundException("Product does not exist!");
    } else {
      return product;
    }
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() data: Partial<UpdateProductDto>) {
    await this.service.updateProduct(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Product updated successfully'
    };
  }

  @Post()
  async create(@Body() productDto: ProductDto) {
    return this.service.createProduct(productDto);
  }

  @Delete(":id")
  async delete(@Param("id") id: number) {
    const product = await this.service.deleteProduct(id);
    return product;

  }


}
