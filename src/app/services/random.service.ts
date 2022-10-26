import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRandomNumber } from '../models/IRandomNumber';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  constructor(private http: HttpClient) {}
  getByPath(path: string): Observable<IRandomNumber[]> {
    return this.http.get<IRandomNumber[]>(
      `${environment.randomDataApiUrl}${path}`
    );
  }
}
