import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule} from '@angular/router';
import {AUTH_ROUTES} from './auth-routing';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './auth-interceptor';
import {AuthService} from './auth.service';
import {TokenStorageService} from './token-storage.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AUTH_ROUTES),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders,
    AuthService,
    TokenStorageService
  ]
})
export class AuthModule { }
