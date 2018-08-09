import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatToolbarModule, MatButtonModule } from '@angular/material';

import { BannerComponent } from './banner.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [BannerComponent],
  exports: [BannerComponent]
})
export class BannerModule { }
