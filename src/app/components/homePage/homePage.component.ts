import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { selectRandomNumbersData } from 'src/app/redux/randomnumbers/randomselectors';
import { loadRandomNumbers } from 'src/app/redux/randomnumbers/randomnumber.actions';
import { selectFakeUsersData } from 'src/app/redux/fakeusers/fakeusers.selectors';
import { loadFakeUsers } from 'src/app/redux/fakeusers/fakeusers.actions';
import { selectUserEmail } from 'src/app/redux/user/user.selectors';
import { LogoutAction } from 'src/app/redux/user/user.actions';
import { IRandomNumber } from 'src/app/models/IRandomNumber';
import { IFakeUser } from 'src/app/models/IFakeUser';
import { IAppState } from 'src/app/redux/app.state';

@Component({
  selector: 'app-homePage',
  templateUrl: 'homePage.component.html',
  styleUrls: ['./homePage.component.scss'],
})
export class HomePageComponent implements OnInit {
  randomNumbers: IRandomNumber[] = [];
  users: IFakeUser[] = [];
  userEmail: string = '';

  likes: string = '';
  favorites: string = '';
  smiles: string = '';
  targetViews: string = '';
  targetFollowers: string = '';
  targetIncome: string = '';

  constructor(private router: Router, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.pipe(select(selectUserEmail)).subscribe((value) => {
      this.userEmail = value.split('@')[0];
    });

    this.store.dispatch(loadFakeUsers());
    this.store.pipe(select(selectFakeUsersData)).subscribe((value) => {
      this.users = value.fakeUsers;
    });

    this.store.dispatch(loadRandomNumbers());
    this.store.pipe(select(selectRandomNumbersData)).subscribe((value) => {
      this.randomNumbers = value.randomNumbers;
      const goodMetricsNumbers: number[] = [];
      const goodTargetMetricsNumbers: number[] = [];

      this.randomNumbers.forEach((element: IRandomNumber) => {
        if (element.number >= 3000000000 && element.number <= 5000000000) {
          goodMetricsNumbers.push(element.number);
        }
        if (element.number >= 5000000001 && element.number <= 9500000000) {
          goodTargetMetricsNumbers.push(element.number);
        }
      });

      this.likes = goodMetricsNumbers[0]
        .toString()
        .slice(0, 5)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      this.favorites = goodMetricsNumbers[1]
        .toString()
        .slice(0, 5)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      this.smiles = goodMetricsNumbers[2]
        .toString()
        .slice(0, 5)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      this.targetViews = goodTargetMetricsNumbers[0].toString().slice(0, 2);
      this.targetFollowers = goodTargetMetricsNumbers[1].toString().slice(0, 2);
      this.targetIncome = goodTargetMetricsNumbers[2].toString().slice(0, 2);
    });
  }

  logoutHandler(): void {
    this.store.dispatch(LogoutAction());
    this.router.navigateByUrl('/login');
  }
}
