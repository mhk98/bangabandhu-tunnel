import { Controller, Get, Res, HttpStatus, Param, Body, Post } from "@nestjs/common";
import { RechargeService } from "./recharge.service";
import { rechargetbl } from "./recharge.entity";



@Controller('rechargetbl')
export class RechargeController{

    constructor(private readonly rechargeService: RechargeService) {
    }

    @Post()
    async createrechargetbl(@Res() response, @Body()rechargetbl: rechargetbl) {
        const newrrechargetbl = await this. rechargeService.createrechargetbl(rechargetbl);
        return response.status(HttpStatus.CREATED).json({
            newrrechargetbl
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const Rechargetbls = await this.rechargeService.findAll();
        return response.status(HttpStatus.OK).json({
           Rechargetbls
        })
    }

    @Get('/:Card_ID')
    async findById(@Res() response, @Param('Card_ID') Card_ID) {
        const Rfidtbl = await this.rechargeService.findOne(Card_ID);
        return response.status(HttpStatus.OK).json({
            Rfidtbl
        })
    }
} 