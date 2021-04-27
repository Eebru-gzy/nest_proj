import {
  Controller,
  Get,
  Put,
  Delete,
  Post,
  Param,
  Body,
  Res,
  Req,
} from '@nestjs/common';
import { CreateItemDto } from './dto/createItem.dto';
import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Post()
  createItem(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
  }

  //params
  @Get(':id')
  findOne(@Param() param): Item {
    return this.itemsService.findOne(param.id);
  }

  @Delete(':id')
  del(@Param('id') id: string): string {
    return `Delete Item ${id}`;
  }

  @Put(':id')
  edit(@Param('id') id: string, @Body() updateDto: CreateItemDto): string {
    return `Update id- ${id} => Item-Name ${updateDto.name}`;
  }

  //To simulate the express way of things
  @Get('express')
  express(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('Hello World');
  }
}
