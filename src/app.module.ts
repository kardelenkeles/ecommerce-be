import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import databaseConfig from "./config/database.config";
import { ConfigModule } from "@nestjs/config";
import { ProductModule } from "./product/product.module";
import { CardModule } from "./cart/card.module";


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [databaseConfig]
  }),
    ProductModule,
    CardModule,

  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
