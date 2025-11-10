import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, UserInput]
})
export class App {
  protected readonly title = signal('investment-calculator');

  calculateInvestmentResults(data: {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  }) {
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

  return annualData;
}
}
