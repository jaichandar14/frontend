import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];
{ path: '', redirectTo: 'view-Employee', pathMatch: 'full' },  
  { path: 'view-Employee', component: employeelistComponent },  
  { path: 'add-employee', component: add-employeeComponent },  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
