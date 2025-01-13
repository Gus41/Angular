import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  //form data
  initialInvestiment = '0';
  annualInvestiment = '0';
  expectedReturn = '5';
  duration = '10'

  handleSubmit(){
    console.log("Form submited")
    console.log(this.initialInvestiment)
  }
  

}
