import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { InventoryService } from '../inventory.service';
import { InventoryItem } from '../inventory-item';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private inventoryService: InventoryService, private cookieService: CookieService) { }

  editIcon = faEdit;
  externalLinkIcon = faExternalLinkAlt;

  inventory: InventoryItem[] = [];

  filteredInventory: InventoryItem[] = [];

  filteredInventoryIndexes: number[] = [];

  getInventoryItems(): void {
    this.inventory = this.inventoryService.getInventory();
  }

  limitInventory(entries = 10): void {
    this.cookieService.set('entriesPerPage', entries.toString());
    this.filteredInventory = [];
    if (entries > this.inventory.length) {
      entries = this.inventory.length;
    }
    for (let i = 0; i < entries; i++) {
      this.filteredInventory.push(this.inventory[i]);
    }
  }

  countIndexes(): void {
    for (let i = 5; i < this.inventory.length; i += 5){
      this.filteredInventoryIndexes.push(i);
    }
  }


  ngOnInit(): void {
    this.getInventoryItems();

    if (this.cookieService.get('entriesPerPage')) {
      this.limitInventory(Number(this.cookieService.get('entriesPerPage')));
    } else{
      this.limitInventory(10);
    }

    this.countIndexes();
  }

}
