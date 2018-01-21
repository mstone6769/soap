import { Component, OnInit } from '@angular/core';
import { SoapService } from '../soap.service';
import { Soap } from '../models/soap';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: []
})
export class CreateComponent implements OnInit {
  data: Soap;
  constructor(
    private auth: AngularFireAuth,
    private service: SoapService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.authState.subscribe((user)=>{
      this.data = {
        application: '',
        observation: '',
        scripture: '',
        prayer: '',
        private: true,
        userId: user.uid
      }
    });
  }

  create(data) {
    this.service.create(data).then(()=>{
      this.router.navigate(['../']);
    })
  }

}
