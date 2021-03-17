import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './home.component';
import { CardItemComponent } from '../../components/card-item/card-item.component';

@NgModule({
  declarations: [CardItemComponent, HomeComponent],
  imports: [CommonModule, MatGridListModule, MatCardModule],
  exports: [HomeComponent],
})
export class HomeModule {}
