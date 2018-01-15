import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private itemDoc: AngularFirestoreDocument<any>;
  public soap: Observable<any>;
  constructor(private afs: AngularFirestore, private r: ActivatedRoute) {
    
  }
  update(item: any) {
    console.log(item);
    this.itemDoc.update(item);
  }

  ngOnInit() {

    this.r.params.subscribe((params => {
      this.itemDoc = this.afs.doc<any>('soap/'+params.id);
    }));

    this.soap = this.itemDoc.valueChanges();
  }

}
