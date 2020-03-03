//import {FormsComponent} from './forms/forms.component';
import { Component, OnInit } from '@angular/core';
import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private toastr : ToastrService) { }

  ngOnInit() {
  }
  submit(){
  this.toastr.success('Submitted Succesfully....','Associate Register');
  }
}
