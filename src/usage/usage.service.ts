import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { usagetbl } from './usage.entity';


  


@Injectable()
export class UsageService {
  constructor(
    @InjectRepository(usagetbl)
    private UsagetblRepository: Repository<usagetbl>,
  ) {}

  findAll(): Promise<usagetbl[]> {
    return this.UsagetblRepository.find();
  }

  findOne(Usage_ID: string): Promise<usagetbl> {
    return this.UsagetblRepository.findOneBy({ Usage_ID });
  }

createusertbl(usagetbl: usagetbl ): Promise<usagetbl> {
    return this.UsagetblRepository.save(usagetbl);
}
}

