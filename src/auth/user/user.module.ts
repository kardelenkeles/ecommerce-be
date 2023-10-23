import { forwardRef, Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { DatabaseModule } from "../../database/database.module";
import { AuthModule } from "../auth.module";
import { userProvider } from "../../providers/user.provider";


@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => AuthModule)
  ],
  controllers: [UserController],
  providers: [UserService,
    ...userProvider],
  exports: [UserService]
})
export class UserModule {
}
