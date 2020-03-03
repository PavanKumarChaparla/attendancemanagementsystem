import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : Observable <firebase.User>;
  loginForm: FormGroup;
  submitted=false;
  flag=false;
  noUser=false;
  errormsg="";
  constructor(private formBuilder: FormBuilder, public firestore : AngularFirestore, public fireauth: AngularFireAuth,private router: Router) {
      this.fireauth.authState.subscribe(
        (auth) =>{
          if(auth!=null){
            this.flag=false;
            this.user=fireauth.authState;
            var dbRef = firestore.collection('associate').doc(auth.uid);
            var getDoc = dbRef.ref.get()
              .then(doc => {
                if (!doc.exists) {
                  console.log('No such document!');
                } else {
                   if(doc.data().role=='Associate') router.navigate(['associate']);
                   else if(doc.data().role=='Admin') router.navigate(['admin']);
                   else if(doc.data().role=='Security') router.navigate(['security']);
                }
              })
              .catch(err => {
                console.log('Error getting document', err);
              });
          }
        }
      );
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }
  get validate() { return this.loginForm.controls; }

  async Login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
        this.fireauth.auth.signInWithEmailAndPassword(this.loginForm.value.username,this.loginForm.value.password).catch(error=>{
        if(error){
            this.errormsg=error.message;  
            this.flag=true;
            }
        });
  }
}
