import {User} from '../models/user';
import {ListActionType, LoadSuccess, RemoveUser} from '../actions/list';
import {Action} from '@ngrx/store';

export interface State {
  loading: boolean;
  loaded: boolean;
  list: User[];
}

const initialState: State = {
  loading: false,
  loaded: false,
  list: []
};


export const list = (state = initialState, action: Action) => {
  switch (action.type) {
    case ListActionType.Load:
      console.log('load....');
      return {
        ...state,
        loading: true,
      };
    case ListActionType.LoadSuccess:
      console.log('load success');
      const myA = (<LoadSuccess>action).payload;
      console.log(myA);
      return {
        ...state,
        loaded: true,
        loading: false,
        list: myA
      };
    case ListActionType.RemoveUser:
      console.log('第二步骤,监听到action变化(remove user),作出业务逻辑处理');
      const userId = (<RemoveUser>action).payload;
      state.list = state.list.filter(function (item) {
        return item.id !== userId;
      });
      return {...state};
    default:
      return state;
  }

};
