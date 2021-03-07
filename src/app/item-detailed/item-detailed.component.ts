import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../inventory.service';
import { InventoryItem } from '../inventory-item';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-item-detailed',
  templateUrl: './item-detailed.component.html',
  styleUrls: ['./item-detailed.component.scss']
})
export class ItemDetailedComponent implements OnInit {

  constructor(private route: ActivatedRoute, private inventoryService: InventoryService) { }

  id: string;

  inventory: InventoryItem[] = [];

  keys: string;

  getInventoryItems(): void {
    this.inventory = this.inventoryService.getInventory();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getInventoryItems();
  }

}
