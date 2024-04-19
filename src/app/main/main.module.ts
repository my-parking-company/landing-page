import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MyMatModule } from '../my-mat/my-mat.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MyMatModule,
  ]
})
export class MainModule { }
