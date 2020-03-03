import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { AddhealthcardComponent } from './addhealthcard/addhealthcard.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AssociateComponent } from './associate/associate.component';
import { SecurityComponent } from './security/security.component';
import { ShowhcComponent } from './showhc/showhc.component';
import {ShowidComponent} from './showid/showid.component';
import { LoginComponent } from './login/login.component';
import {SubmitComponent} from './submit/submit.component';
import { IssueComponent } from './issue/issue.component'; 
import { SearchEmpComponent } from './search-emp/search-emp.component';



const routes: Routes = [
  {path: '', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path :'admin', component: AdminComponent},
  {path:'admin/forms',component: FormsComponent},
  {path : 'admin/associates', component: AssociateComponent},
  {path : 'admin/security', component: SecurityComponent},
  {path : 'associate', component: AssociateComponent},
  {path: 'associate/showhc', component: ShowhcComponent},
  {path : 'security', component: SecurityComponent},
  { path: 'admin/searchEmp', component: SearchEmpComponent},
  {path: 'admin/searchEmp/addhc', component: AddhealthcardComponent},
  {path: 'associate/showid', component: ShowidComponent},
  {path: 'login', component:LoginComponent},
  {path: 'associate/addhc', component:AddhealthcardComponent},
 // {path: '**', redirectTo:''},
  {path: 'security/issue', component:IssueComponent},
  {path:'associate/searchEmp', component:SearchEmpComponent},
  {path:'associate/searchEmp/addhc', component: AddhealthcardComponent},
  {path: 'associate/addhc', component:AddhealthcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }