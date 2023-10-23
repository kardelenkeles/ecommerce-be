import { CardEntity } from "../cart/card.entity";
import { CardProductEntity } from "../cart/cardProduct.entity";


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
