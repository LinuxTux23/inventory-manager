import { Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareDown} from '@fortawesome/free-solid-svg-icons';
import { NgModel } from '@angular/forms';

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

  navbarOpen = false;

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  showSearchModal(searchValue: string): void {
    console.log(this.searchInputValue);
  }

  ngOnInit(): void {
  }

}
