import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RfidController } from './rfid.controllers';
import { rfidtbl } from './rfid.entity';
import { RfidService } from './rfid.service';

@Module({
  imports: [TypeOrmModule.forFeature([rfidtbl])],
  providers: [RfidService],
  controllers: [RfidController],
})
export class RfidModule {}
