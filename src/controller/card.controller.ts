import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { CardService } from "../service/card.service";
import { CardEntity } from "../entity/card.entity";
import { ProductDto } from "../entity/dto/product.dto";
import { CardDto } from "../entity/dto/card.dto";
import { UpdateCardDto } from "../entity/dto/updateCard.dto";

@Controller("card")
export class CardController {
  constructor(private service: CardService) {
  }

  @Get(":id")
  async getCard(@Param("id") id: number): Promise<CardEntity> {
    const product = await this.service.getCard(id);
    return product;
  }

  @Post()
  async create(@Body() cardDto: CardDto) {
    return this.service.createCard(cardDto);
  }

  @Put(':id')
  async updateCard(@Param('id') cardId: number, @Body() cardDto: CardDto){
    const card = await this.service.updateCard(cardId, cardDto);
    return card;
  }

}
