import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
