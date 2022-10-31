import {
    Controller,
    Get,
    Res,
    HttpStatus,
    Param,
    Body,
    Post,
  } from '@nestjs/common';
  import { cardService } from './card.service';
  import {  cardtbl } from './card.entity';
  
  @Controller('cardtbl')
  export class cardController {
    constructor(private readonly cardService: cardService) {}
  
    @Post()
    async createcardtbl(@Res() response, @Body() cardtbl: cardtbl) {
      const newrcardtbl = await this.cardService.createusertbl( cardtbl);
      return response.status(HttpStatus.CREATED).json({
        newrcardtbl,
      });
    }
  
    @Get()
    async fetchAll(@Res() response) {
      const cardtbls = await this.cardService.findAll();
      return response.status(HttpStatus.OK).json({
        cardtbls,
      });
    }
  
    @Get('/:card_ID')
    async findById(@Res() response, @Param('card_ID') card_ID) {
      const cardtbl = await this.cardService.findManyBy(card_ID);
      return response.status(HttpStatus.OK).json({
        cardtbl,
      });
    }
  
    //trying multiple params
  
    //   @Get('/:User_ID/:card_ID')
    //   async findcardUser(@Param('card') card: string, @Param('user')
    //   }
  }