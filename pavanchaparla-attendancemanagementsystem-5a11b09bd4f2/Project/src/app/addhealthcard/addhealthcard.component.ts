import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { GetIdService } from '../services/get-id.service';


@Component({
  selector: 'app-addhealthcard',
  templateUrl: './addhealthcard.component.html',
  styleUrls: ['./addhealthcard.component.css']
})

export class AddhealthcardComponent implements OnInit {

  associateId;
  submitted = false;
  flag= false;
  success=false;
  
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    policyno :new FormControl ('', Validators.required),
    uhid: new FormControl ('', Validators.required),
    gender: new FormControl ('', Validators.required),
    dob: new FormControl ('', Validators.required),
    validfrom: new FormControl ('', Validators.required),
    validupto: new FormControl ('', Validators.required)
   });
  productCollection: AngularFirestoreCollection;
   get validate(){
    return this.registerForm.controls;
  }
  constructor( private location: Location, private firestore: AngularFirestore, public fireauth : AngularFireAuth, private service: GetIdService) {  
  }
  
  ngOnInit() {
    this.authenticate();
  }
  authenticate(){
    this.fireauth.authState.subscribe(
      (auth) =>{
        if(auth!=null){
          this.flag=false;
          var dbRef = this.firestore.collection('associate').doc(auth.uid);
          dbRef.ref.get()
            .then(doc => {
              if (!doc.exists) {
                return;
              }
             if(doc.data().role=='Associate') this.associateId=auth.uid;
             else  this.associateId=this.service.getId();
            })
        }
      }
    );
  }
  goBack(){
    this.location.back();
  }
  
  addFormData() {

    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }  
    else{    
      this.flag=true;
      let data= this.registerForm.value;

      this.firestore.collection('employeehc').doc(this.associateId)
      .collection('healthcards')
      .add(data);
      

      this.resetForm();
      this.submitted=false;
      this.flag=false;
      this.success=true;
    }    
  }
    resetForm(){
      this.registerForm.setValue({
      policyno : '',
      uhid: '',
      gender: '',
      dob: '',
      validfrom:'',
      validupto:'',
      firstName:'',
      lastName:'',

    });
  }
}
