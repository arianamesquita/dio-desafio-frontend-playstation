import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContainersComponent } from './containers/containers.component';
import { CardsComponent } from './components/cards/cards.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/cards/components/card-label/card-label.component';
import { CardPriceComponent } from './components/cards/components/card-price/card-price.component';


@NgModule({
  declarations: [
    ContainersComponent,
    CardsComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPriceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
