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
      console.log('不使用effect', mNum);
    });
  }

  public add() {
    console.log('add');
    /**调用dispatch触发添加redurces**/
    this._store.dispatch({
      type: NumActionType.Add
    });

  }

  ngOnInit() {}

}
