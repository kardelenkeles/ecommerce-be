import { Module } from "@nestjs/common";
import { RoleController } from "./role.controller";
import { RoleService } from "./role.service";
import { roleProvider } from "../../providers/role.provider";
import { DatabaseModule } from "../../database/database.module";


@Module({
  imports: [
    DatabaseModule

  ],
  controllers: [RoleController],
  providers: [RoleService,
    ...roleProvider],
  exports: [RoleService]
})
export class RoleModule {
}
