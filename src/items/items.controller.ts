import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './interfaces/items.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Item {
    return this.itemsService.findOne(+id);
  }

  @Post()
  create(@Body() item: Item): void {
    this.itemsService.create(item);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() item: Item): Item {
    return this.itemsService.update(+id, item);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.itemsService.delete(+id);
  }
}
