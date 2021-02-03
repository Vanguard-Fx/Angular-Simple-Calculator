import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() operator: string;
  @Output() buttonClickEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    console.log(this.operator);
    this.buttonClickEvent.emit(this.operator);
  }

}
