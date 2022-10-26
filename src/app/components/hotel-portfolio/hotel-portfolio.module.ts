import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelPortfolioRoutingModule } from './hotel-portfolio-routing.module';
import { HotelPortfolioComponent } from './hotel-portfolio.component';


@NgModule({
  declarations: [
    HotelPortfolioComponent
  ],
  imports: [
    CommonModule,
    HotelPortfolioRoutingModule
  ]
})
export class HotelPortfolioModule { }
