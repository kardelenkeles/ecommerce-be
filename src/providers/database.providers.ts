
import { ProductEntity } from "../entity/product.entity";

import { ConfigService } from "@nestjs/config";
import { Sequelize } from "sequelize-typescript";

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',

    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize(configService.get('database'));

      sequelize.addModels([ProductEntity]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
