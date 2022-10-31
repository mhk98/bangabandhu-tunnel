import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { cardtbl } from './card.entity';

@Injectable()
export class cardService {
  constructor(
    @InjectRepository(cardtbl)
    private RfidtblRepository: Repository<cardtbl>,
  ) {}

  findAll(): Promise<cardtbl[]> {
    return this.RfidtblRepository.find();
  }

 //this findone is responsiblegor getting one single rfid information in JSON

//this findone is responsiblegor getting one single rfid information in JSON

findOne(Card_ID: string): Promise<cardtbl> {
    return this.RfidtblRepository.findOneBy({ Card_ID });
  }

  
  findManyBy(card_ID: string): Promise<cardtbl[]> {
    return this.RfidtblRepository.find({
      where: {
        Card_ID: card_ID,
      },
    });
  }


  

  createusertbl(cardtbl:cardtbl): Promise<cardtbl> {
    return this.RfidtblRepository.save(cardtbl);
  }
}