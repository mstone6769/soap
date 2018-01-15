import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Observable<any>;
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.items = this.db.collection('soap', ref => ref.where('userId', '==', 'i8svxVE3tLhqxQ5eNoQoO2oryhg2')).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });;
  }

}
