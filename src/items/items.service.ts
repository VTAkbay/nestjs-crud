import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item {
    return this.items.find((item) => item.id === id);
  }

  create(item: Item): void {
    this.items.push(item);
  }

  update(id: number, itemUpdate: Item): Item {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      this.items[itemIndex] = itemUpdate;
      return itemUpdate;
    }
    return null;
  }

  delete(id: number): void {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      this.items.splice(itemIndex, 1);
    }
  }
}
