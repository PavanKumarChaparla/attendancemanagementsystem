import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';



@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  
  submitted = false;
  constructor(private router: Router) {}
  ngOnInit() {
  }
   
   onSubmit() {
     this.router.navigate(['security/issue']);
   };
       
  }
 

