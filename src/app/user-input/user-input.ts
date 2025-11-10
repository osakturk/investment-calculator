import { Component, EventEmitter, inject, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  enteredInitialInvestment = '0';
  enteredAnnualInitialInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  constructor(private investmentService: InvestmentService) {
    this.investmentService = investmentService;
  }

  onSubmitCalculate() {
    this.investmentService.calculateInvestmentResults(
      {
        initialInvestment: +this.enteredInitialInvestment,
        annualInvestment: +this.enteredAnnualInitialInvestment,
        expectedReturn: +this.enteredExpectedReturn,
        duration: +this.enteredDuration
      }
    );
  }
}
