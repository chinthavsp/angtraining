import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { RegComponent } from './reg/reg.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: Home2Component},
  {path: 'register', component: RegistrationComponent},
  {path: 'reg', component:RegComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
