import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  Body,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { usertbl } from './usertbl.entity';
// import { UsageService } from './usage.service';
// import { usagetbl } from './usage.entity';

@Controller('usertbl')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //   @Post()
  //   async createusertbl(@Res() response, @Body() usagetbl: usertbl) {
  //     const newrusagetbl = await this.usersService.createusertbl(usagetbl);
  //     return response.status(HttpStatus.CREATED).json({
  //       newrusagetbl,
  //     });
  //   }

  @Get()
  async fetchAll(@Res() response) {
    const Userstbls = await this.usersService.findAll();
    return response.status(HttpStatus.OK).json({
      Userstbls,
    });
  }

  @Get('/:User_ID')
  async findById(@Res() response, @Param('User_ID') User_ID) {
    const Usertbl = await this.usersService.findOne(User_ID);
    return response.status(HttpStatus.OK).json({
      Usertbl,
    });
  }

  // @Get('/:User_ID')
  // async findById(@Res() response, @Param('User_ID') User_ID) {
  //   const Usertbl = await this.usersService.findOne(User_ID);
  //   return response.status(HttpStatus.OK).json({
  //     Usertbl,
  //   });
  // }
}
