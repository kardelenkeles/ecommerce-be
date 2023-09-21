import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import databaseConfig from "./config/database.config";
import { ConfigModule } from "@nestjs/config";
import { ProductModule } from './module/product.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [databaseConfig]
  }), ProductModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
