import { Module } from '@nestjs/common';
import { DatabaseModule } from "../database/database.module";
import { ProductService } from "./product.service";
import { productProvider } from "../providers/product.provider";
import { ProductController } from "../controller/product.controller";

@Module({
  imports: [DatabaseModule],
  providers: [ProductService,
    ...productProvider],
  controllers: [ProductController]
})
export class ProductModule {}
