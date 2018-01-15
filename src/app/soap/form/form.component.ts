import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

import { Soap } from '../soap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [`
    :host {
      display: block;
      max-width: 320px;
    }
  `]
})
export class FormComponent implements OnInit {

  constructor() { }
  @Input() soap: Soap;

  @Output() onUpdate = new EventEmitter<Soap>();

  ngOnInit() {
  }


  update(soap) {
    console.log('dadf',soap);
    this.onUpdate.emit(soap);
  }

}
