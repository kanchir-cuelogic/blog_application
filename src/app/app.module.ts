import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { BlogCardComponent } from './blog-card/blog-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    BlogHomeComponent,
    AppHomeComponent,
    BlogCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
