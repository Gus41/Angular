import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import InvestimentInput from './investiment-input.model';
import { InvestimentResultsComponent } from './investiment-results/investiment-results.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestimentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investiment-calculator';
  

}
