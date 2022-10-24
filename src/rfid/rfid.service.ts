import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { rfidtbl } from './rfid.entity';


  


@Injectable()
export class RfidService {
  constructor(
    @InjectRepository(rfidtbl)
    private RfidtblRepository: Repository<rfidtbl>,
  ) {}

  findAll(): Promise<rfidtbl[]> {
    return this.RfidtblRepository.find();
  }

  findOne(User_ID: string): Promise<rfidtbl> {
    return this.RfidtblRepository.findOneBy({ User_ID });
  }

createusertbl(rfidtbl: rfidtbl ): Promise<rfidtbl> {
    return this.RfidtblRepository.save(rfidtbl);
}
}

