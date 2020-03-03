import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { async } from 'q';


@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})

export class IssueComponent implements OnInit {

  user : Observable <firebase.User>;
  submitted=false;
  flag=false;
  doc=false;

  form = new FormGroup({
    eno: new FormControl('', Validators.required),
    tno: new FormControl('', Validators.required)
  });
  get f(){
    return this.form.controls;
  }   
  constructor(private firestore: AngularFirestore, public fireauth : AngularFireAuth, private router: Router,) {
}

  ngOnInit() {
  }
  async onSubmit(){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
    await this.fireauth.authState.subscribe(
      async (auth) =>{
      if(auth!=null){
        var dbRef = this.firestore.collection('associate').doc(this.form.value.eno);
        var getDoc = dbRef.ref.get()
        .then(doc => {
          if (!doc.exists) {
            this.doc=true;
            this.submitted=false;
            return;
          }
          });
        var tid={
          "temporaryid": this.form.value.tno
        };
        this.user = await  this.fireauth.authState;
        await this.firestore.collection('associate').doc(this.form.value.eno).update(tid).then(function(){
          console.log("updated succesfully");
        });
        this.resetForm();
        this.doc=false;
        this.flag=true;
        this.submitted=false;
    }
  });
}
resetForm(){
  this.form.setValue({
    eno:'',
    tno:''
  });
}
}
