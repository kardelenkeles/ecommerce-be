import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CardService } from "../service/card.service";
import { CardEntity } from "../entity/card.entity";
import { CardDto } from "../entity/dto/card.dto";

@Controller("card")
export class CardController {
  constructor(private service: CardService) {
  }

  @Get(":id")
  async getCard(@Param("id") id: number): Promise<CardEntity> {
    return await this.service.getCard(id);
  }

  @Post()
  async create(@Body() cardDto: CardDto) {
    return this.service.createCard(cardDto);
  }

  @Put(':id')
  async updateCard(@Param('id') cardId: number, @Body() cardDto: CardDto){
    return await this.service.updateCard(cardId, cardDto);
  }

}
