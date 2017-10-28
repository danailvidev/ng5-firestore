import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  coursesCollection: AngularFirestoreCollection<any[]>;
  courses: Observable<any[]>;
  snapshot: any;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.coursesCollection = this.db.collection('courses', ref => {
      return ref.orderBy('name', 'asc');
    });
    this.courses = this.coursesCollection.valueChanges();
    this.snapshot = this.coursesCollection.snapshotChanges()
      .map(arr => {
        return arr.map(snap => {
          //console.log(snap.payload.doc.data());
          return snap.payload.doc.id;
        });
      });
  }


}
