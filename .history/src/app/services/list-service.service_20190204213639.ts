import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable()
export class ListService {
  public getList(): Observable<any> {
    return this.http.get<{ users: User[] }>('/api/users.json');
  }

  public removeUser(): Observable<any> {
    return Observable.create(function (observer) {
      observer.next('true');
    });
  }

  constructor(private http: HttpClient) {
  }
}
