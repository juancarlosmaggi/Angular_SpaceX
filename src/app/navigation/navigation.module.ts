import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
  ],
  exports: [HeaderComponent],
})
export class NavigationModule {}
