import { Component, OnInit, Input } from '@angular/core';

import { Soap } from '../../models/soap';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: []
})
export class ViewComponent implements OnInit {
  @Input() soap: Soap;

  constructor() { }

  ngOnInit() {
  }

}
