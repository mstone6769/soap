import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Soap } from '../models/soap';
import { SoapService } from '../soap.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  data: Observable<Soap>;
  constructor(
    private route: ActivatedRoute,
    private service: SoapService
  ) {}

  ngOnInit() {
    this.data = this.route.paramMap
      .switchMap(
        (params: ParamMap) =>
          this.service.getItem(params.get('id'))
      );
  }

}
