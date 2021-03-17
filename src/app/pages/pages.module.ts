import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeModule, AboutModule],
})
export class PagesModule {}
