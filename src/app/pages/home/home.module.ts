import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LaunchesPastListComponent } from '../../components/launches-past-list/launches-past-list.component';
import { LaunchesFormComponent } from '../../components/launches-form/launches-form.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    LaunchesFormComponent,
    LaunchesPastListComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
