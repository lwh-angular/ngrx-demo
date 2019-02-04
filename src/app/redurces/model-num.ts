import {Num} from '../models/num';
import {NumActionType} from '../actions/num';
import {Action} from '@ngrx/store';

export const modelNum = (state: Num = new Num(0), action: Action) => {

  console.log("-----状态发生变化--------");
  switch (action.type) {

    case NumActionType.Add:

      console.log('状态发生变化', NumActionType.Add);
      state.count++;

      return state;

    default:
      console.log('默认状态', NumActionType.Add);
      return state;

  }

};
