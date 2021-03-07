import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemDetailedComponent } from './item-detailed/item-detailed.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:id', component: ItemEditComponent },
  { path: 'detailed/:id', component: ItemDetailedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
