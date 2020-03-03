import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Associateid } from '../models/associateid.model';

@Component({
  selector: 'app-showid',
  templateUrl: './showid.component.html',
  styleUrls: ['./showid.component.css']
})
export class ShowidComponent implements OnInit {
 

  user : Observable <firebase.User>;
  
  associateCollection: AngularFirestoreCollection<Associateid>;
  associates: Observable<Associateid[]>;
  associate: any; 


  constructor(private firestore: AngularFirestore, public fireauth : AngularFireAuth) {
    this.fireauth.authState.subscribe(
      (auth) =>{
      if(auth!=null){
        this.user=this.fireauth.authState;
        this.associateCollection = this.firestore.collection('associate');
        this.associates = this.associateCollection.valueChanges();
        this.associateCollection.doc(auth.uid).ref.get().then((doc) => {
        this.associate = doc.data();
      });
    }
  });
}

  ngOnInit() {
  }

}
