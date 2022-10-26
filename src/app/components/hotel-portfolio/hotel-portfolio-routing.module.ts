import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelPortfolioComponent } from './hotel-portfolio.component';

const routes: Routes = [
  { path: '', component: HotelPortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelPortfolioRoutingModule { }
