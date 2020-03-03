import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { GetIdService } from '../services/get-id.service';
import { Healthcard } from '../models/healthcard.model' ;


@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent implements OnInit {

  searchText:string;
  data=[];
  associateCollection: AngularFirestoreCollection<Healthcard>;

  constructor(private firestore: AngularFirestore, public services : GetIdService) {
    this.associateCollection = this.firestore.collection('associate');
    this.associateCollection.get().forEach( doc=>{
      doc.docs.forEach( dat=>{
        this.data.push(dat.id);
      });
    });
   }

  ngOnInit() {
  }
  createHc(value){
    this.services.setId(value);
  }


}
