import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IUserState } from 'src/app/models/IUserState';

import { Store } from '@ngrx/store';
import { LoginAction } from 'src/app/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
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
