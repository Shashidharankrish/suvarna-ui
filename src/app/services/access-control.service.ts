import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig } from '../configs/app.config';

@Injectable({
  providedIn: 'root'
})
export class AccessControlService {
  private mockDataUrl = '/assets/users.json';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    console.log('login', username, password);

    return this.http.get<any[]>(this.mockDataUrl).pipe(
      map((data: any[]) => {
        if (Array.isArray(data)) {
          console.log('userdataarray', data);
          const user = data.find(user => user.username === username && user.password === password);
          console.log('userdata', user);
          return !!user; // Convert to boolean
        } else {
          console.log('userdata', data);
          console.error('Invalid data format:', data);
          return false;
        }
      })
    );
  }
}
