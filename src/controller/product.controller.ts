import { Body, Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
import { ProductService } from "../service/product.service";
import { ProductEntity } from "../entity/product.entity";
import { ProductDto } from "../entity/dto/product.dto";

@Controller("product")
export class ProductController {
  constructor(private service: ProductService) {
  }

  @Get()
  getAll() {
    return this.service.getAllProducts();
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

  @Post()
  async create(@Body() productDto: ProductDto) {
    return this.service.createProduct(productDto);
  }
}
