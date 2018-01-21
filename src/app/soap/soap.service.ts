import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Soap } from './models/soap';

@Injectable()
export class SoapService {

  constructor(private db: AngularFirestore) { }

  getList() {
    return this.db.collection('soap', ref => ref.where('userId', '==', 'i8svxVE3tLhqxQ5eNoQoO2oryhg2'))
      .snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  getDoc(id: string): AngularFirestoreDocument<Soap> {
    return this.db.doc<Soap>('soap/'+id);
  }

  getItem(id: string): Observable<Soap> {
    return this.getDoc(id).valueChanges();
  }

  updateItem(id: string, data: Soap){
    console.log(data);

    return this.getDoc(id).update(data);
  }

}
