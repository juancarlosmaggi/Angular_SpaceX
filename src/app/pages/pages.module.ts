import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LaunchModule } from './launch/launch.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, HomeModule, LaunchModule, AboutModule],
})
/**
 * Utilit class used to load all the individual pages onto the App.
 * This way we do not clutter the app.module.ts
 */
export class PagesModule {}
