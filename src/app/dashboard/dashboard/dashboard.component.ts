import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, CardsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
