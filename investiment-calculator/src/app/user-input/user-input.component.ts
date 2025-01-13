import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output()
  calculate = new EventEmitter<{
    initialInvestment: number, 
    duration: number, 
    expectedReturn: number, 
    annualInvestment: number
  }>();

  //form data
  initialInvestiment = '0';
  annualInvestiment = '0';
  expectedReturn = '5';
  duration = '10'

  handleSubmit() {
    console.log("Form submited")
    
    //the plush convert the string to a number
    this.calculate.emit({
      initialInvestment: +this.initialInvestiment,
      annualInvestment: +this.annualInvestiment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    });
  }


}
