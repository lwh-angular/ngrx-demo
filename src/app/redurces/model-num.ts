import {Num} from '../models/num';
import {NumActionType} from '../actions/num';
import {Action} from '@ngrx/store';

export const modelNum = (state: Num = new Num(0), action: Action) => {

  console.warn('-----状态发生变化--------');
  switch (action.type) {

    case NumActionType.Add:

      console.warn('状态发生变化', NumActionType.Add);
      state.count++;

      return state;

    default:
      console.warn('默认状态', NumActionType.Add);
      return state;

  }

};
