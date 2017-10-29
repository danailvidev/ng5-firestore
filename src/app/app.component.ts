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
  course: Observable<any>;
  courseDoc: AngularFirestoreDocument<any>;

   coursesCollection: AngularFirestoreCollection<any[]>;
   courses: Observable<any[]>;
  snapshot: any;
  newContent: string;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    // this.getCourses('asc');

    this.courseDoc = this.db.doc('courses/7MIrUndljDOndB0bW5FG');
    this.course = this.courseDoc.valueChanges();
  }

  getCourses(orderBy) {
    this.coursesCollection = this.db.collection('courses', ref => {
      return ref.orderBy('name', orderBy);
    });

    this.courses = this.coursesCollection.valueChanges();
    this.snapshot = this.coursesCollection.snapshotChanges()
      .map(arr => {
        return arr.map(snap => {
          const data = snap.payload.doc.data();
          const id = snap.payload.doc.id;
          return { id, ...data };
        });
      });
  }


  updateContent() {
    this.courseDoc.update({ name: this.newContent });
  }

}
