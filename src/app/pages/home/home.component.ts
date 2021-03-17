import { Component, OnInit } from '@angular/core';

export interface HomeCardModel {
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  cards: Array<HomeCardModel>;
  constructor() {
    this.cards = [
      { cols: 4, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
    ];
  }

  ngOnInit(): void {}
}
