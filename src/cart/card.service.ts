import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { CardEntity } from "./card.entity";
import { CardDto } from "./card.dto";
import { CardProductEntity } from "./cardProduct.entity";
import { UpdateCardDto } from "./updateCard.dto";
import { ProductEntity } from "../product/product.entity";

@Injectable()
export class CardService {

  constructor(@Inject("CARD_REPOSITORY")
              private cardRepo: typeof CardEntity,
              @Inject("CARD_PRODUCT_REPOSITORY")
              private cardProductsRepo: typeof CardProductEntity
  ) {
  }

  async getCard(id: number) {
    return this.cardRepo.findOne({
      where: { id },
      include: [{
        association: "cardProduct",
        include: ["product"]
      }]
    });
  }

  async createCard(cardDto: CardDto) {

    const cart =
      await this.cardRepo.create({
        quantity: cardDto.quantity,
        total: cardDto.total
      });
    console.log("cart", cardDto);
    const promises = [];
    cardDto.productIds.map(async productId => {
      const prom = this.cardProductsRepo.create({
        cardId: cart.id,
        productId: productId
      });
      promises.push(prom);
    });
    await Promise.all(promises);

    return this.getCard(cart.id);

  }

  async updateCard(cardId: number, cardDto: CardDto) {
    const card = await this.cardRepo.findByPk(cardId, {
      include: [CardProductEntity]
    });

    if (!card) {
      throw new NotFoundException("Cart Not Found");
    }

    await this.cardProductsRepo.destroy({
      where: {
        cardId: card.id
      }
    });

    const promises = cardDto.productIds.map((productId) =>
      this.cardProductsRepo.create({
        cardId: card.id,
        productId
      })
    );

    await Promise.all(promises);

    card.total = cardDto.total;
    card.quantity = cardDto.quantity;
    await card.save();

    return this.getCard(card.id);
  }


  async removeProductFromCart(cardId: number, productId: number) {
    try {
      const result = await CardProductEntity.destroy({
        where: {
          cardId: cardId,
          productId: productId
        }
      });

      if (result === 1) {
        console.log("Ürün karttan başarıyla kaldırıldı.");
      } else {
        console.log("Ürün kartta bulunamadı.");
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  }

}
