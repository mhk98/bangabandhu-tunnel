import { Controller, Get, Res, HttpStatus, Param, Body, Post } from "@nestjs/common";
import { UsageService } from "./usage.service";
import { usagetbl } from "./usage.entity";



@Controller('usagetbl')
export class UsageController{

    constructor(private readonly usageService: UsageService ) {
    }

    @Post()
    async createusagetbl(@Res() response, @Body() usagetbl: usagetbl) {
        const newrusagetbl = await this.usageService.createusertbl( usagetbl);
        return response.status(HttpStatus.CREATED).json({
            newrusagetbl
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const Usagetbls = await this.usageService.findAll();
        return response.status(HttpStatus.OK).json({
           Usagetbls
        })
    }

    @Get('/:Usage_ID')
    async findById(@Res() response, @Param('Usage_ID') Usage_ID) {
        const Usagetbl = await this.usageService.findOne(Usage_ID);
        return response.status(HttpStatus.OK).json({
            Usagetbl
        })
    }
} 