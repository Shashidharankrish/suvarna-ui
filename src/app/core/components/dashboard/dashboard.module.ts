import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from '../../../components/header/header.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    CardsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
