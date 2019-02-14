import {User} from '../models/user';
import {Action} from '@ngrx/store';

/**
 * 第二步：编写action（app/actions/num.ts）
 */

export enum ListActionType {
  Load = 'LOAD',
  LoadSuccess = 'LOAD_SUCCESS',
  RemoveUser = 'REMOVE_USER',
  RemoveUserSuccess = 'REMOVE_USER_SUCCESS',
  RemoveUserError = 'REMOVE_USER_ERROR'
}

export class Load implements Action {
  readonly type = ListActionType.Load;
}

export class LoadSuccess implements Action {
  readonly type = ListActionType.LoadSuccess;

  constructor(public payload: User[]) {
  }
}

export class RemoveUser implements Action {
  readonly type = ListActionType.RemoveUser;
  constructor(public payload: number) {
    console.log('创建更新action');
  }
}

export class RemoveUserSuccess implements Action {
  readonly type = ListActionType.RemoveUserSuccess;
}

export class RemoveUserError implements Action {
  readonly type = ListActionType.RemoveUserError;
}
