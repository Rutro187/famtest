import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyComponent } from './family/family.component';
import { StaffComponent } from './staff/staff.component';
import { LoginComponent } from './login/login.component';
import { UsermanComponent } from './userman/userman.component';


const routes: Routes = [
  {path: 'family', component: FamilyComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'userman', component: UsermanComponent},
  {path: '**', component: LoginComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
