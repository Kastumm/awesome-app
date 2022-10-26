import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LoginComponent } from './components/login/login.component';
import { CardComponent } from './components/card/card.component';
import { LoginPageComponent } from './components/loginPage';
import { HomePageComponent } from './components/homePage';
import { AutoFocus } from './auto-focus.directive';
import { AppComponent } from './app.component';
import { randomNumbersReducer } from './redux/randomnumbers/randomnumber.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RandomNumbersEffects } from './redux/randomnumbers/randomnumber.effect';
import { FakeUsersEffects } from './redux/fakeusers/fakeusers.effects';
import { fakeUsersReducer } from './redux/fakeusers/fakeusers.reducer';
import { userReducer } from './redux/user/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    HomePageComponent,
    LineChartComponent,
    CardComponent,
    AutoFocus,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      user: userReducer,
      randomNumbers: randomNumbersReducer,
      fakeUsers: fakeUsersReducer,
    }),
    EffectsModule.forRoot([RandomNumbersEffects, FakeUsersEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
