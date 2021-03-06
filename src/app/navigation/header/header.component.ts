import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  showMobileMenu: boolean;

  constructor(private router: Router) {
    this.showMobileMenu = false;
  }

  /**
   * Toggle mobile menu visibility.
   */
  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }

  ngOnInit(): void {}
}
