import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { AppHomeComponent } from './app-home/app-home.component';

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blog-home/:name', component: BlogHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
