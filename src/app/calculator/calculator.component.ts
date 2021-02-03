import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  operators = [
    "sum",
    "dif",
    "pow",
    "div",
  ]

  primoVal: number;
  secondoVal: number;

  selectedOperator: string = "sum";

  constructor() { }

  ngOnInit(): void {
  }
}
