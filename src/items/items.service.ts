import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '98739hui7y87as7',
      name: 'Item 1',
      description: 'This is Item, 1',
      qty: 100,
    },
    {
      id: '7676afs65a6s36as5c',
      name: 'Item 2',
      description: 'This is Item, 2',
      qty: 50,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
