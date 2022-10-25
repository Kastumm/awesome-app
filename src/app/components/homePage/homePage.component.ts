import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { RandomService } from 'src/app/services/random.service';
import { selectUserEmail } from 'src/app/redux/user.selectors';
import { IRandomNumbers } from 'src/app/models/IRandomNumber';
import { UsersService } from '../../services/users.service';
import { LogoutAction } from 'src/app/redux/user.actions';
import { IAppState } from 'src/app/redux/app.state';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-homePage',
  templateUrl: 'homePage.component.html',
  styleUrls: ['./homePage.component.scss'],
})
export class HomePageComponent implements OnInit {
  randomNumbers: IRandomNumbers[] = [];
  users: IUser[] = [];
  userEmail: string = '';

  likes: string = '';
  favorites: string = '';
  smiles: string = '';
  targetViews: string = '';
  targetFollowers: string = '';
  targetIncome: string = '';

  constructor(
    private usersService: UsersService,
    private randomService: RandomService,
    private router: Router,
    private store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this.usersService.getByQuery('?results=3').subscribe((response) => {
      this.users = response.results;
    });

    this.store.pipe(select(selectUserEmail)).subscribe((value) => {
      this.userEmail = value.split('@')[0];
    });

    this.randomService
      .getByPath('number/random_number?size=50')
      .subscribe((response) => {
        const goodMetricsNumbers: number[] = [];
        const goodTargetMetricsNumbers: number[] = [];

        this.randomNumbers = response;
        this.randomNumbers.forEach((element: IRandomNumbers) => {
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
        this.targetFollowers = goodTargetMetricsNumbers[1]
          .toString()
          .slice(0, 2);
        this.targetIncome = goodTargetMetricsNumbers[2].toString().slice(0, 2);
      });
  }

  logoutHandler(): void {
    this.store.dispatch(LogoutAction());
    this.router.navigateByUrl('/login');
  }
}
