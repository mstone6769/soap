import { Component, OnInit } from '@angular/core';
import { SoapService } from '../soap.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Observable<any>;
  constructor(private service: SoapService) { }

  ngOnInit() {
    this.items = this.service.getList();
  }

}
