import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(
    // private firestore: AngularFirestore
  ) { }


// addFamily(record) {
//   return this.firestore.collection('Family').add(record);
//   }
// searchFamily(record) {
//   return this.firestore.collection('Family').snapshotChanges(record);
// }
}

