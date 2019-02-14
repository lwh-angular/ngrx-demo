import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {ListActionType, Load, LoadSuccess, RemoveUser, RemoveUserError, RemoveUserSuccess} from '../actions/list';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ListService} from '../services/list-service.service';
import {Observable, of} from 'rxjs';

@Injectable()
export class ListEffects {

  /** 通过构造注入需要的服务和 action 信号流 **/
  constructor(private action$: Actions, private listService: ListService) {

  }

  @Effect()
  loadList$: Observable<Action> = this.action$.pipe(   /**rxjs写法。loadList$是effect名，在外部没有用到，可以随便起。**/
    ofType<Load>(ListActionType.Load),
    switchMap(action => {
      return this.listService.getList().pipe(map(
        users => {
          return new LoadSuccess(users);
        }
      ));
    })
  );



  @Effect()
  removeUser$: Observable<Action> = this.action$.pipe( /**action信号流**/
    /**如果是 RemoveUser Action**/
    ofType<RemoveUser>(ListActionType.RemoveUser),
    switchMap(_ => {
      return this.listService.removeUser().pipe(
        map(res => {
          console.log('Effect 监听信号流发生变化，完成相应的业务处理，返回业务结果', res);
          if (res === 'true') {
            return new RemoveUserSuccess();
          } else {
            return new RemoveUserError();
          }
        }),
        catchError(err => of(new RemoveUserError()))
      );
    })
  );

}
