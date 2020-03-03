import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as  firebase   from  'firebase';
import { async } from 'q';
import { ToastrService} from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  submitted=false;
  flag= false;
  success=false;
  image:File;
  file:File;
  upload=false;
  url="https://us-central1-attendance-19db4.cloudfunctions.net/CreateEmpl";
  
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    bgroup: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    eid: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    image: new FormControl(this.image,Validators.required),
    imagesrc:new FormControl('')
   });
   
   get validate(){
     return this.form.controls;
   }   

    constructor(private location: Location, 
      private firestore: AngularFirestore,
      public af : AngularFireAuth,
      private toastr : ToastrService,
      private router: Router,
       private http: HttpClient ) { 
       }
    ngOnInit() {
    }
    goBack(){
      this.location.back();
    }
    async addFormData(){
      this.submitted=true;
      if(this.form.invalid){
        return;
      }
      else{
        this.flag=await true;
        const metaData= {'contentType': this.file.type};
        var photos = '/photos/';
        var filename = this.file.name;
        var path = photos + filename;
        var storageRef :  firebase.storage.Reference=  firebase.storage().ref(path);
        await storageRef.put(this.file,metaData);
        await storageRef.getDownloadURL().then(downloadURL => {
          const imageUrl = downloadURL;
          this.form.patchValue({ 
            imagesrc: imageUrl
          });
        });
        var obj={
          "uid":this.form.value.eid,
          "email": this.form.value.email
        }
        this.http.post(this.url,JSON.stringify(obj)).subscribe(res =>{
        });
        let data =await this.form.value;
                
        this.firestore.collection('associate').doc(this.form.value.eid).set(data);
        
        this.resetForm();
        this.submitted=false;
        this.flag=false;
        this.success=true;
      }
    }
  
    resetForm(){
      this.form.setValue({
        firstName: '',
        lastName:'',
        bgroup:'',
        eid:'',
        email:'',
        role:'',
        image:null,
        imagesrc:''
      });
    }
    processFile(event :any ){
       this.file =  event.target.files[0]; 
    }
}
