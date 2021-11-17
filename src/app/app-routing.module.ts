import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyapiComponent } from './dummyapi/dummyapi.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegComponent } from './reg/reg.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'',component:DummyapiComponent},

  {path: 'home', component: HomeComponent},
  {path: 'home2', component: Home2Component},
  {path: 'register', component: RegistrationComponent},
  {path: 'reg', component:RegComponent},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m => m.AdminModule)},
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
