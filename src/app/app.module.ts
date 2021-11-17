import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from'@angular/material/slider';
import {FormsModule} from'@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CnComponent } from './cn/cn.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegComponent } from './reg/reg.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DummyapiComponent } from './dummyapi/dummyapi.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    CnComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    Home2Component,
    RegistrationComponent,
    RegComponent,
    PageNotFoundComponent,
    DummyapiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
