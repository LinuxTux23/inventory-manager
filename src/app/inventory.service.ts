import { Injectable } from '@angular/core';
import { InventoryItem } from './inventory-item';
import { INVENTORY } from './mock-inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  getInventory(): InventoryItem[] {
    return INVENTORY;
  }

  getItemById(queriedID: number): InventoryItem[] {
    const output = INVENTORY.filter(function(item) {
          return item.id === queriedID;
      });
    return output;
  }

}


