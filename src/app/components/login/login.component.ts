import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { LoginAction } from 'src/app/redux/user.actions';
import { IUserState } from 'src/app/models/IUserState';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authForm!: FormGroup;
  isSubmitted = false;
  emailFocus = false;
  passwordFocus = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email: ['example@example.com', Validators.required],
      password: ['12345678', Validators.required],
    });
  }

  get formControls() {
    return this.authForm.controls;
  }

  signIn(): void {
    this.isSubmitted = true;
    if (this.authForm.invalid) {
      return;
    }
    this.signInHandler(this.authForm.value);
    this.router.navigateByUrl('/home');
  }

  signInHandler(userData: IUserState): void {
    this.store.dispatch(LoginAction({ payload: userData }));
  }
}
