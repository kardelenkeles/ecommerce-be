
import { ProductEntity } from "../product/product.entity";

import { ConfigService } from "@nestjs/config";
import { Sequelize } from "sequelize-typescript";
import { CardEntity } from "../cart/card.entity";
import { CardProductEntity } from "../cart/cardProduct.entity";
import { UserEntity } from "../auth/user/user.entity";
import { RoleEntity } from "../auth/role/entity/role.entity";
import { AssignedRoles } from "../auth/role/entity/assigned-roles.entity";

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',

    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize(configService.get('database'));

      sequelize.addModels([ProductEntity, CardEntity, CardProductEntity, UserEntity, RoleEntity, AssignedRoles]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
