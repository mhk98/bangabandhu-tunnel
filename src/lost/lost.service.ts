import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { lost_historytbl } from './lost.entity';


  


@Injectable()
export class LostService {
  constructor(
    @InjectRepository( lost_historytbl)
    private LosttblRepository: Repository< lost_historytbl>,
  ) {}

  findAll(): Promise< lost_historytbl[]> {
    return this.LosttblRepository.find();
  }

  
  findOne(User_ID: string): Promise< lost_historytbl> {
    return this.LosttblRepository.findOneBy({ User_ID});
  }

createusertbl( lost_historytbl:  lost_historytbl ): Promise< lost_historytbl> {
    return this.LosttblRepository.save( lost_historytbl);
}
}