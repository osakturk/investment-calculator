import { Component, output, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentInput } from './investment-input.model';
import { InvestmentResultModel } from './investment-results/investment-results.model';
import { InvestmentResults } from './investment-results/investment-results';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, UserInput, InvestmentResults]
})
export class App {
  protected readonly title = signal('investment-calculator');
  investmentResults?: InvestmentResultModel[]

  calculateInvestmentResults(data: InvestmentInput) {
  const annualData = [];
  let investmentValue = data.initialInvestment;

  for (let i = 0; i < data.duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
    investmentValue += interestEarnedInYear + data.annualInvestment;
    const totalInterest =
      investmentValue - data.annualInvestment * year - data.initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: data.annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: data.initialInvestment + data.annualInvestment * year,
    });
  }

  this.investmentResults = annualData
}
}
