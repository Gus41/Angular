import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import InvestimentService from '../investiment.service';


@Component({
  selector: 'app-investiment-results',
  templateUrl: './investiment-results.component.html',
  styleUrl: './investiment-results.component.css',
  standalone:false
})
export class InvestimentResultsComponent {

  constructor(private investimentService: InvestimentService) {

  }

  get results() {
    return this.investimentService.resultData()
  }
}
