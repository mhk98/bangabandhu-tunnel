import { Controller, Get, Res, HttpStatus, Param, Body, Post } from "@nestjs/common";
import { LostService} from "./lost.service";
import { lost_historytbl } from "./lost.entity";



@Controller('rfidtbl')
export class LostController{

    constructor(private readonly LostService: LostService) {
    }

    @Post()
    async createrfidtbl(@Res() response, @Body()lost_historytbl: lost_historytbl) {
        const newrlost_historytbl = await this.LostService.createusertbl(lost_historytbl);
        return response.status(HttpStatus.CREATED).json({
            newrlost_historytbl
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const LostTbls = await this.LostService.findAll();
        return response.status(HttpStatus.OK).json({
           LostTbls
        })
    }

    @Get('/: User_ID')
    async findById(@Res() response, @Param('User_ID')  User_ID ) {
        const Losttbl = await this.LostService.findOne( User_ID);
        return response.status(HttpStatus.OK).json({
          Losttbl
        })
    }
} 