import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { selectUserEmail } from 'src/app/redux/user.selectors';
import { UsersService } from '../../services/users.service';
import { LogoutAction } from 'src/app/redux/user.actions';
import { Metrics } from 'src/app/models/metrics.model';
import { IAppState } from 'src/app/redux/app.state';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-homePage',
  templateUrl: 'homePage.component.html',
  styleUrls: ['./homePage.component.scss'],
})
export class HomePageComponent implements OnInit {
  users: IUser[] = [];
  metrics: Metrics = new Metrics();
  userEmail: string = '';

  constructor(
    private usersService: UsersService,
    private router: Router,
    private store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this.usersService.getAll().subscribe((response) => {
      this.users = response.results;
    });

    this.store.pipe(select(selectUserEmail)).subscribe((value) => {
      this.userEmail = value.split('@')[0];
    });
  }

  logoutHandler(): void {
    this.store.dispatch(LogoutAction());
    this.router.navigateByUrl('/login');
  }
}
