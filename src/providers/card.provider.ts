import { CardEntity } from "../entity/card.entity";
import { CardProductEntity } from "../entity/cardProduct.entity";


export const cardProvider = [
  {
    provide: 'CARD_REPOSITORY',
    useValue: CardEntity,
  },
  {
    provide: 'CARD_PRODUCT_REPOSITORY',
    useValue: CardProductEntity,
  },
];
