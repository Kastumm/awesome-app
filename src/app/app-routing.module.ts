import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/homePage';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './components/loginPage';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
