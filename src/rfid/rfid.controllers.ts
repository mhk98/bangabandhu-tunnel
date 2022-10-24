import { Controller, Get, Res, HttpStatus, Param, Body, Post } from "@nestjs/common";
import { RfidService } from "./rfid.service";
import { rfidtbl } from "./rfid.entity";



@Controller('rfidtbl')
export class RfidController{

    constructor(private readonly rfidService: RfidService) {
    }

    @Post()
    async createrfidtbl(@Res() response, @Body()rfidtbl: rfidtbl) {
        const newrfidtbl = await this.rfidService.createusertbl(rfidtbl);
        return response.status(HttpStatus.CREATED).json({
            newrfidtbl
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const Rfidtbls = await this.rfidService.findAll();
        return response.status(HttpStatus.OK).json({
           Rfidtbls
        })
    }

    @Get('/:Card_ID')
    async findById(@Res() response, @Param('Card_ID') Card_ID) {
        const Rfidtbl = await this.rfidService.findOne(Card_ID);
        return response.status(HttpStatus.OK).json({
            Rfidtbl
        })
    }
} 