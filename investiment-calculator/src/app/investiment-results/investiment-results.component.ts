import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import InvestimentService from '../investiment.service';


@Component({
  selector: 'app-investiment-results',
  imports: [CurrencyPipe],
  templateUrl: './investiment-results.component.html',
  styleUrl: './investiment-results.component.css'
})
export class InvestimentResultsComponent {

  constructor(private investimentService: InvestimentService) {

  }

  get results() {
    return this.investimentService.resultData()
  }
}
