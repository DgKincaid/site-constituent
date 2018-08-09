import { NgModule } from '@angular/core';

import {
  BannerModule,
  LoginModule
} from 'cons-lib';

const modules: any[] = [
  BannerModule,
  LoginModule
];

@NgModule({
  imports: [
    modules
  ],
  exports: [
    modules
  ]
})
export class CommonLibModule { }
