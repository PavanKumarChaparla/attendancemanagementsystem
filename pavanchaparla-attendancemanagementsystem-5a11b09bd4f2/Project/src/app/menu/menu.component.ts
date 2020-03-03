import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showHelp=false;
  showAdmin=false;

  constructor(public af: AngularFireAuth) { }

  ngOnInit() {
  }
  openMenu(){
    document.getElementById("myMenu").style.width = "100%";
  }
  closeMenu(){
    document.getElementById("myMenu").style.width="0%";
  }
  logout(){
    this.af.auth.signOut();
    
  }
  displayShowHelp(){
    if(this.showHelp==false) this.showHelp=true;
    else this.showHelp=false;
  }
  displayAdmin(){
    if(this.showAdmin==false) this.showAdmin=true;
    else this.showAdmin=false;
  }
}
