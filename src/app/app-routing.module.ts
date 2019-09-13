import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyComponent } from './family/family.component';
import { StaffComponent } from './staff/staff.component';


const routes: Routes = [
  {path: 'family', component: FamilyComponent},
  {path: 'staff', component: StaffComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
