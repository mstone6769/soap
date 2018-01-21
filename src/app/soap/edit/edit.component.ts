import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Soap } from '../models/soap';
import { SoapService } from '../soap.service';

import 'rxjs/add/operator/switchMap';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {
  itemDoc: AngularFirestoreDocument<Soap>;
  data: Observable<Soap>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: SoapService
  ) { }

  ngOnInit() {
    this.data = this.route.paramMap
      .switchMap(
        (params: ParamMap) =>
          this.service.getItem(params.get('id'))
      );
  }

  update(item: Soap) {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.updateItem(id, item).subscribe(()=>{
      this.router.navigate(['../'])
    });
  }

}
