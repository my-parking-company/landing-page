import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MyMatModule } from '../my-mat/my-mat.module';
import { HeaderComponent, HomeComponent } from './components';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HomeCardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MyMatModule,
  ]
})
export class MainModule { }
