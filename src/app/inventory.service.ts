import { Injectable } from '@angular/core';
import { InventoryItem } from './inventory-item';
import { INVENTORY } from './mock-inventory';
import {filter} from 'rxjs/operators';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  getInventory(): InventoryItem[] {
    return INVENTORY;
  }

}


