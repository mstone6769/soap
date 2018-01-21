import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

import { Soap } from '../models/soap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [`
    :host {
      display: block;
      max-width: 320px;
    }
    .font-weight-normal {
      font-size: 12.8px;
    }
  `]
})
export class FormComponent implements OnInit {

  constructor() { }
  @Input() soap: Soap;

  @Output() onSubmit = new EventEmitter<Soap>();

  ngOnInit() {
  }


  submit(soap) {
    this.onSubmit.emit(soap);
  }

}
