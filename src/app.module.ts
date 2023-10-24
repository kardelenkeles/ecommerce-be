import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import databaseConfig from "./config/database.config";
import { ConfigModule } from "@nestjs/config";
import { ProductModule } from "./product/product.module";
import { CardModule } from "./cart/card.module";
import { RoleModule } from "./auth/role/role.module";
import { UserModule } from "./auth/user/user.module";
import { AdminUserModule } from "./auth/admin/user-crud/admin-user.module";
import { AuthModule } from "./auth/auth.module";
import { DatabaseModule } from "./database/database.module";
import { AssignedRoles } from "./auth/role/entity/assigned-roles.entity";


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [databaseConfig]
  }),
    ProductModule,
    CardModule,
    RoleModule,
    UserModule,
    AdminUserModule,
    AuthModule,
    DatabaseModule

  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
