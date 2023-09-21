import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import databaseConfig from "./config/database.config";
import { ConfigModule } from "@nestjs/config";
import { ProductService } from './service/product.service';
import { ProductController } from './controller/product.controller';
import { ProductModule } from './module/product.module';
import { Product } from './product/product';
import { Produc } from './produc/produc';
import { Product } from './product/product';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [databaseConfig]
  }), ProductModule,],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService, Product, Produc],
})
export class AppModule {}
