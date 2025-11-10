import { Component, output, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentResults } from './investment-results/investment-results';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, UserInput, InvestmentResults],
})
export class App {}
