import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(
    private afs: AngularFirestore
  ) { }


addFamily(record) {
  return this.firestore.collection('Family').add(record);
  }
// searchFamily(record) {
//   return this.firestore.collection('Family').snapshotChanges(record);
// }
}

