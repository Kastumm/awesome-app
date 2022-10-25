import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRandomNumbers } from '../models/IRandomNumber';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  constructor(private http: HttpClient) {}
  getByPath(path: string): Observable<IRandomNumbers[]> {
    return this.http.get<IRandomNumbers[]>(
      `${environment.randomDataApiUrl}${path}`
    );
  }
}
