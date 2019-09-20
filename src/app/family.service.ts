import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Family } from '../app/Models/Interfaces/family';
@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  familyCollection: AngularFirestoreCollection<Family>;
  familyDoc: AngularFirestoreDocument<Family>;

  constructor(private afs: AngularFirestore) {
    this.familyCollection = this.afs.collection('Family', ref => ref.orderBy('family id', 'desc'));
   }



allFamily() {
  return this.familyCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(x => {
      const data = x.payload.doc.data() as Family;
      const id = x.payload.doc.id;
      return { id, ...data};
    });
  }));
}

add(data: Family) {
  this.familyCollection.add(data);
  }

searchFamily(id: string) {
  return this.afs.doc<Family>(`family/${id}`);
}
}

