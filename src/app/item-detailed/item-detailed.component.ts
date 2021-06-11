import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { InventoryService } from '../inventory.service';
import { InventoryItem } from '../inventory-item';
import { ContainerService } from '../container.service';
import { ContainerItem } from '../container-item';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-detailed',
  templateUrl: './item-detailed.component.html',
  styleUrls: ['./item-detailed.component.scss']
})
export class ItemDetailedComponent implements OnInit {

  constructor(private route: ActivatedRoute, private inventoryService: InventoryService, private containerService: ContainerService) { }

  queryID: number;

  failedQueryID: string;

  item: InventoryItem[] = [];

  container: ContainerItem[] = [];

  editIcon = faEdit;

  error = false;

  errorMessage: string;

  errorFurtherInformation = true;

  selectedContainer: ContainerItem[];

  date: Date = new Date();

  currentYear = Number(this.date.getFullYear());

  yearList: number[] = [];

  inputForm = new FormGroup({
    picture: new FormControl(''),
    id: new FormControl(''),
    name: new FormControl(''),
    type: new FormControl(''),
    container: new FormControl(''),
    combo: new FormControl(''),
    fromContainer: new FormControl(''),
    year: new FormControl(''),
    page: new FormControl(''),
    syn: new FormControl('')
  });

  getContainer(queriedId: number): ContainerItem[] {
      return this.containerService.getContainerById(queriedId);
  }

  generateYearList(): void {
    for (let year = this.currentYear - 20; year <= this.currentYear; year ++) {
      this.yearList.push(year);
    }
  }

  onFileChanged(event): void {
    const file = event.target.files[0];
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.failedQueryID = String(params.id);
      this.queryID = Number(params.id);
    });

    if (isNaN(this.queryID)) {
      this.error = true;
      this.errorMessage = 'Die übergebene ID ist nicht vom Typ Number, oder kann nicht implizit in Number umgewandelt werden.';
    } else {
      this.queryID = Number(this.queryID);
      this.item = this.inventoryService.getItemById(this.queryID);
      this.container = this.containerService.getContainer();
      this.selectedContainer = this.getContainer(this.item[0].container);
      this.generateYearList();
    }
  }
}
