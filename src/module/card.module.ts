import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";
import { CardService } from "../service/card.service";
import { cardProvider } from "../providers/card.provider";
import { CardController } from "../controller/card.controller";

@Module({
  imports: [DatabaseModule, ],
  providers: [CardService,
    ...cardProvider],
  controllers: [CardController]
})
export class CardModule {}
