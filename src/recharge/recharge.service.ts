import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { rechargetbl } from './recharge.entity';


  


@Injectable()
export class RechargeService {
  constructor(
    @InjectRepository(rechargetbl)
    private RechargetblRepository: Repository<rechargetbl >,
  ) {}

  findAll(): Promise<rechargetbl[]> {
    return this.RechargetblRepository.find();
  }

  findOne(Recharge_ID: string): Promise<rechargetbl> {
    return this.RechargetblRepository.findOneBy({ Recharge_ID });
  }

createrechargetbl(rechargetbl: rechargetbl ): Promise<rechargetbl> {
    return this.RechargetblRepository.save(rechargetbl);
}
}

