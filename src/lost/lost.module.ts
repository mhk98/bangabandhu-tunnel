import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LostController } from './lost.controllers';
import { lost_historytbl } from './lost.entity';
import { LostService } from './lost.service';



@Module({
  imports: [TypeOrmModule.forFeature([lost_historytbl])],
  providers: [LostService],
  controllers: [LostController],
})
export class LostModule {}