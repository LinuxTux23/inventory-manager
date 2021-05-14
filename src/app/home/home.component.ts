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

  pageList: number[] = [];

  pages: number;

  entriesPerPage: number;

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

  calcNumberOfPages(entries: number): void {
    this.pages = Math.round(this.inventory.length / entries);
    for (let i = 1; i <= this.pages; i++) {
      this.pageList.push(i);
    }
  }

  switchToPage(): void {
    const lastItem = this.filteredInventory.length;

    this.filteredInventory = [];

    for (let i = lastItem; i < this.inventory.length - this.entriesPerPage - 1; i++) {
      this.filteredInventory.push(this.inventory[i]);
    }
    console.log(this.filteredInventory);
  }


  ngOnInit(): void {
    this.getInventoryItems();

    if (this.cookieService.get('entriesPerPage')) {
      this.entriesPerPage = Number(this.cookieService.get('entriesPerPage'));
      this.limitInventory(this.entriesPerPage);
    } else{
      this.limitInventory(10);
    }
    this.countIndexes();
    this.calcNumberOfPages(this.entriesPerPage);
  }

}
