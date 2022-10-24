import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsageController } from './usage.controller';
import { usagetbl } from './usage.entity';
import { UsageService } from './usage.service';


@Module({
  imports: [TypeOrmModule.forFeature([usagetbl])],
  providers: [UsageService],
  controllers: [UsageController],
})
export class UsageModule {}