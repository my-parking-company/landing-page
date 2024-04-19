import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MyMatModule } from '../my-mat/my-mat.module';
import { HeaderComponent, HomeComponent } from './components';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MyMatModule,
  ]
})
export class MainModule { }
