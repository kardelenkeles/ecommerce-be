import { forwardRef, Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { ConfigModule } from "@nestjs/config";
import databaseConfig from "../config/database.config";
import { JwtModule } from "@nestjs/jwt";
import authConfig from "../config/auth.config";
import * as dotenv from "dotenv";
import { UserModule } from "./user/user.module";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [
    forwardRef(() => UserModule),
    DatabaseModule,
    JwtModule.register({
      signOptions: { expiresIn: '1d' },
      secret: authConfig().auth.jwtPrivateKey
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {
}

