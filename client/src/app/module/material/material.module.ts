import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
} from '@angular/material';

const modules = [
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
];
@NgModule({
  imports: [
    modules
  ],
  exports: [
    modules
  ]
})

export class MaterialModule { }
