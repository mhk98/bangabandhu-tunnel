import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cardController } from './card.controllers';
import { cardtbl } from './card.entity';
import { cardService } from './card.service';

@Module({
  imports: [TypeOrmModule.forFeature([cardtbl])],
  providers: [cardService],
  controllers: [ cardController],
})
export class cardModule {}
