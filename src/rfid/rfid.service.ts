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

  // for getting all card information with same user id
  findManyBy(User_ID: string): Promise<rfidtbl[]> {
    return this.RfidtblRepository.find({
      where: {
        User_ID: User_ID,
      },
    });
  }

  //   //for getting card id
  // findCardUser(card_ID:string):Promise<rfidtbl>{
  //   return this.RfidtblRepository.findCardUser({ card_ID });
  // }

  //
  doSomeQuery() {
    console.log('i am dosomequery');
    return this.RfidtblRepository.find(); //query('SELECT * FROM Usagetbl;');
  }

  // getHistory(User_ID: string): Promise<rfidtbl[]> {
  //   return this.RfidtblRepository.find('SELECT * FROM User_ID');

  // }

  createusertbl(rfidtbl: rfidtbl): Promise<rfidtbl> {
    return this.RfidtblRepository.save(rfidtbl);
  }
}