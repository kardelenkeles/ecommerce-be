import { ProductEntity } from "../product/product.entity";


export const productProvider = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: ProductEntity,
  },
];
