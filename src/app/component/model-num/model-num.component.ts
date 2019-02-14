import { Component, OnInit } from '@angular/core';
import {Num} from '../../models/num';
import {Store} from '@ngrx/store';
import {NumActionType} from '../../actions/num';

@Component({
  selector: 'app-model-num',
  templateUrl: './model-num.component.html',
  styleUrls: ['./model-num.component.scss']
})
export class ModelNumComponent implements OnInit {
  public num: Num;

  constructor(private _store: Store<any>) {
    /**涉及到rxjs。**/
    this._store.select('modelNum').subscribe(mNum => {
      this.num = mNum;
      console.warn('不使用effect', mNum);
    });
  }

  public add() {
    console.warn('第一步骤,(view)事件触发状态发生变化,增加记录');
    /**调用dispatch触发添加redurces**/
    this._store.dispatch({
      type: NumActionType.Add
    });

  }

  public del() {
    console.warn('第一步骤,(view)事件触发状态发生变化,减少记录');
    this._store.dispatch({type: NumActionType.Del});
  }

  ngOnInit() {}

}
