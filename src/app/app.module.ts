import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemDetailedComponent } from './item-detailed/item-detailed.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ItemEditComponent,
    ItemDetailedComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule
    ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
