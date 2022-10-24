import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<{ results: IUser[] }> {
    return this.http.get<{ results: IUser[] }>(
      'https://randomuser.me/api/?results=3'
    );
  }
}
