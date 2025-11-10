import { Component, input } from '@angular/core';
import { InvestmentResultModel } from './investment-results.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  results = input<InvestmentResultModel[]>()
}
