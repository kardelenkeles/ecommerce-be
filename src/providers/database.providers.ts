
import { ProductEntity } from "../entity/product.entity";

import { ConfigService } from "@nestjs/config";
import { Sequelize } from "sequelize-typescript";
import { CardEntity } from "../entity/card.entity";
import { CardProductEntity } from "../entity/cardProduct.entity";

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',

    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize(configService.get('database'));

      sequelize.addModels([ProductEntity, CardEntity, CardProductEntity]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
