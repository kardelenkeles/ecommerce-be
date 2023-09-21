import { ProductEntity } from "../entity/product.entity";


export const productProvider = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: ProductEntity,
  },
];
