import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faGlasses } from '@fortawesome/free-solid-svg-icons';
import { InventoryService } from '../inventory.service';
import { InventoryItem } from '../inventory-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private inventoryService: InventoryService) { }

  editIcon = faEdit;
  glassesIcon = faGlasses;

  inventory: InventoryItem[] = [];

  getInventoryItems(): void {
    this.inventory = this.inventoryService.getInventory();
  }

  ngOnInit(): void {
    this.getInventoryItems();
  }

}
