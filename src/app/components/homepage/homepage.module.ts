import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { AboutComponent } from './about/about.component';
import { PromiseComponent } from './promise/promise.component';
import { PartnersComponent } from './partners/partners.component';
import { ServicesComponent } from './services/services.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FrameOneComponent } from './frame-one/frame-one.component';
import { FrameTwoComponent } from './frame-two/frame-two.component';
import { FrameThreeComponent } from './frame-three/frame-three.component';
import { BookYourCarComponent } from './book-your-car/book-your-car.component';


@NgModule({
  declarations: [
    HomepageComponent,
    AboutComponent,
    PromiseComponent,
    PartnersComponent,
    ServicesComponent,
    RecipeComponent,
    FrameOneComponent,
    FrameTwoComponent,
    FrameThreeComponent,
    BookYourCarComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
