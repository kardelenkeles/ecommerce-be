import { Inject, Injectable, Param, Query } from "@nestjs/common";
import { ProductEntity } from "./product.entity";
import { ProductDto } from "./product.dto";
import { UpdateProductDto } from "./updateProduct.dto";

@Injectable()
export class ProductService {
  constructor(
    @Inject("PRODUCT_REPOSITORY")
    private productRepository: typeof ProductEntity
  ) {
  }

  async getAllProducts(category ?: string): Promise<ProductEntity[]> {
    const whereProduct = category ? {category} : {};
    return await this.productRepository.findAll<ProductEntity>({
      where: whereProduct
    });
  }

  async getOneProduct(id: string): Promise<ProductEntity> {
    return this.productRepository.findOne({ where: { id } });
  }

  async createProduct(productDto: ProductDto): Promise<ProductEntity> {
    return this.productRepository.create({
      productName: productDto.productName,
      details: productDto.details,
      category: productDto.category,
      // productImage: productDto.productImage,
      price: productDto.price,
      discount: productDto.discount
    });
  }

  async updateProduct(id: number, data: Partial<UpdateProductDto>) {
    const existingProduct = await this.productRepository.findOne({ where: { id } });
    if (!existingProduct) {
      throw new Error("Product not found");
    }
    return await this.productRepository.update(data, { where: { id } });
  }


  async deleteProduct(id: number): Promise<any> {
    await this.productRepository.destroy({ where: { id } });
  }


}
