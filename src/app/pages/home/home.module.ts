import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { LaunchesPastListComponent } from '../../components/launches-past-list/launches-past-list.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [LaunchesPastListComponent, HomeComponent],
  imports: [CommonModule, RouterModule, MatCardModule],
  exports: [HomeComponent],
})
export class HomeModule {}
