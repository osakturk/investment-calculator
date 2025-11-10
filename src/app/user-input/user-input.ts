import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  calculate = output<InvestmentInput>();
  enteredInitialInvestment = '0';
  enteredAnnualInitialInvestment = '0';
  enteredExpectedReturn = '5'
  enteredDuration = '10'

  onSubmitCalculate() {
    console.log('SUBMITTED');
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnnualInitialInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInitialInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration
    })
  }
}
