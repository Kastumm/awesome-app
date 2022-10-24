import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LoginComponent } from './components/login/login.component';
import { CardComponent } from './components/card/card.component';
import { LoginPageComponent } from './components/loginPage';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/homePage';
import { userReducer } from './user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    HomePageComponent,
    LineChartComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ user:userReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
