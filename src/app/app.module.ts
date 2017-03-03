import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './components/unprotected/signup/signup.component';
import { SigninComponent } from './components/unprotected/signin/signin.component';
import { ProtectedComponent } from './components/protected/protected.component';
import {routing} from "./routes/app.routes";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./routes/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AuthService,
              AuthGuard]
  bootstrap: [AppComponent]
})
export class AppModule { }
