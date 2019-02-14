import {Action} from '@ngrx/store';

export enum NumActionType {
  Add = 'ADD',
  Del = 'DELETE'
}

export class ADD implements Action {
  readonly type = NumActionType.Add;  /*固定写法，必须叫type*/
}

export class DEL implements Action {
  readonly type = NumActionType.Del;
}
