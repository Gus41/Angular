import { Component, signal } from '@angular/core';
import InvestimentService from '../investiment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  standalone:false
})
export class UserInputComponent {

  constructor(private investimentService: InvestimentService){
    
  }

  //form data
  initialInvestiment = signal('0');
  annualInvestiment = signal('0');
  expectedReturn = signal('5');
  duration = signal('5')

  handleSubmit() {
    console.log("Form submited")
    
    //the plush convert the string to a number
    this.investimentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestiment(),
      annualInvestment: +this.annualInvestiment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    });
  }


}
