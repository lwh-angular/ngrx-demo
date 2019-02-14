import {Num} from '../models/num';
import {NumActionType} from '../actions/num';
import {Action} from '@ngrx/store';

export const modelNum = (state: Num = new Num(0), action: Action) => {

  console.warn('-----状态发生变化--------');
  switch (action.type) {

    case NumActionType.Add:

      console.warn('第二步骤,监听到action变化(添加),作出业务逻辑处理', NumActionType.Add);
      /**业务处理[放在这里处理]**/
      state.count++;

      return state;

    case NumActionType.Del:
      console.warn('第二步骤,监听到action变化(减少),作出业务逻辑处理', NumActionType.Del);
      state.count--;
      return state;

    default:
      console.warn('第二步骤,监听到action变化(默认状态),作出业务逻辑处理', NumActionType.Add);
      return state;

  }

};
