import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable()
export class ListService {
  public getList(): Observable<any> {
    return this.http.get<{ users: User[] }>('http://localhost:3002/users');
  }

  public removeUser(): Observable<any> {
    return Observable.create(function (observer) {
      console.log('第三步骤,effect 监听到action信号变化，交给service做出业务逻辑处理');
      observer.next('true');
    });
  }

  constructor(private http: HttpClient) {
  }
}
