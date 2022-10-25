import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getNoResultsOfUsers(noUsers: number): Observable<{ results: IUser[] }> {
    return this.http.get<{ results: IUser[] }>(
      `${environment.randomUserApiUrl}?results=${noUsers}`
    );
  }
}
