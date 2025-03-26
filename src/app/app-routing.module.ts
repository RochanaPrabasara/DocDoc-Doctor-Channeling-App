import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlldoctorsComponent } from './components/alldoctors/alldoctors.component';
import { AboutComponent } from './components/about/about.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { DoctordetailsComponent } from './components/doctordetails/doctordetails.component';





const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alldoctors', component:AlldoctorsComponent},
  { path: 'about', component:AboutComponent},
  { path: 'register', component:CreateaccountComponent},
  { path: 'doctor/:id', component:DoctordetailsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
