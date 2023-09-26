import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { CardEntity } from "../entity/card.entity";
import { CardDto } from "../entity/dto/card.dto";
import { CardProductEntity } from "../entity/cardProduct.entity";
import { UpdateCardDto } from "../entity/dto/updateCard.dto";
import { ProductEntity } from "../entity/product.entity";

@Injectable()
export class CardService {

  constructor(@Inject("CARD_REPOSITORY")
              private cardRepo: typeof CardEntity,
              @Inject("CARD_PRODUCT_REPOSITORY")
              private cardProductsRepo: typeof CardProductEntity
  ) {
  }

  async getCard(id: number) {
    return this.cardRepo.findOne({ where: { id } });
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
    return Promise.all(promises);
  }

  async updateCard(cardId: number, cardDto: CardDto) {
    const card = await this.cardRepo.findByPk(cardId, {
      include: [CardProductEntity]
    });

    if (!card) {
      throw new NotFoundException("Kart bulunamadı");
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

    return card;

  }


}
