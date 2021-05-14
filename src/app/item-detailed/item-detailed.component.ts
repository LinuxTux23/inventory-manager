import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { InventoryService } from '../inventory.service';
import { InventoryItem } from '../inventory-item';
import { ContainerService } from '../container.service';
import { ContainerItem } from '../container-item';

@Component({
  selector: 'app-item-detailed',
  templateUrl: './item-detailed.component.html',
  styleUrls: ['./item-detailed.component.scss']
})
export class ItemDetailedComponent implements OnInit {

  constructor(private route: ActivatedRoute, private inventoryService: InventoryService, private containerService: ContainerService) { }

  id: number;

  item: InventoryItem[] = [];

  container: ContainerItem[] = [];

  editIcon = faEdit;

  error = false;

  selectedContainer: ContainerItem[];

  date: Date = new Date();

  currentYear = Number(this.date.getFullYear());

  yearList: number[] = [];

  getContainer(queriedId: number): ContainerItem[] {
      return this.containerService.getContainerById(queriedId);
  }

  generateYearList(): void {
    for (let year = this.currentYear - 20; year <= this.currentYear; year ++) {
      this.yearList.push(year);
    }
  }

  setToCurrentYear(): void {

  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.params['id']);

    if (isNaN(Number(this.id))){
      this.error = true;
    }else {
      this.item = this.inventoryService.getItemById(this.id);
      this.container = this.containerService.getContainer();
      this.selectedContainer = this.getContainer(this.item[0].container);
      this.generateYearList();
    }
  }

}
