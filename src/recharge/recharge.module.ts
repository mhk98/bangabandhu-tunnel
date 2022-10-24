import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RechargeController } from './recharge.controllers';
import { rechargetbl } from './recharge.entity';
import { RechargeService } from './recharge.service';


@Module({
  imports: [TypeOrmModule.forFeature([rechargetbl])],
  providers: [RechargeService],
  controllers: [RechargeController],
})
export class RechargeModule {}