import { Module } from "@nestjs/common";
import { AdminUserController } from "./admin-user.controller";
import { AdminUserService } from "./admin-user.service";
import { adminUserProviders } from "../../../providers/admin-user.provider";


@Module({
  imports: [],
  controllers: [AdminUserController],
  providers: [AdminUserService,
    ...adminUserProviders],
  exports: [AdminUserService]
})

export class AdminUserModule {}
