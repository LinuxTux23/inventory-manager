import { Injectable } from '@angular/core';
import { CONTAINER } from './mock-container';
import { ContainerItem } from './container-item';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor() { }

  getContainer(): ContainerItem[] {
    return CONTAINER;
  }
}
