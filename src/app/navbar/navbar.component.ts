import { Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareDown} from '@fortawesome/free-solid-svg-icons';
import { NgModel } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {element} from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  bookIcon = faBook;

  searchIcon = faSearch;

  caretIcon = faCaretSquareDown;

  searchInputValue: string;

  navbarState = true;

  faPlusIcon = faPlus;

  searchBarState = true;

  toggleNavbar(): void {
    this.navbarState = !this.navbarState;
  }

  toggleSearchBar(): void {
    this.searchBarState = !this.searchBarState;
    if (this.navbarState) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  ngOnInit(): void {

  }

}
