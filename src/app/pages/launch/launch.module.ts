import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { LaunchComponent } from './launch.component';
import { LaunchDetailComponent } from '../../components/launch-detail/launch-detail.component';

@NgModule({
  declarations: [LaunchDetailComponent, LaunchComponent],
  imports: [CommonModule, RouterModule, MatCardModule],
})
export class LaunchModule {}
