import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'hotel-portfolio',
    loadChildren: () => import('./components/hotel-portfolio/hotel-portfolio.module').then(m => m.HotelPortfolioModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./components/services/services.module').then(m => m.ServicesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
