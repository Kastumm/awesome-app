import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFakeUser } from '../models/IFakeUser';

@Injectable({
  providedIn: 'root',
})
export class FakeUsersService {
  constructor(private http: HttpClient) {}
  getByQuery(query: string): Observable<{ results: IFakeUser[] }> {
    return this.http.get<{ results: IFakeUser[] }>(
      `${environment.randomUserApiUrl}${query}`
    );
  }
}
